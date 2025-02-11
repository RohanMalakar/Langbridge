import fetch from 'node-fetch';

class LangflowClient {
    constructor(baseURL, applicationToken) {
        this.baseURL = baseURL;
        this.applicationToken = applicationToken;
    }

    // Utility method to introduce a delay
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Updated POST method with rate-limit handling and retries
    async post(endpoint, body, headers = { "Content-Type": "application/json" }, retries = 3, delay = 1000) {
        headers["Authorization"] = `Bearer ${this.applicationToken}`;
        const url = `${this.baseURL}${endpoint}`;
        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(body)
                });

                // Parse the response body
                const responseMessage = await response.json();

                // Handle rate-limiting errors (429)
                if (response.status === 429) {
                    const retryAfter = response.headers.get('Retry-After');
                    const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : delay;
                    console.warn(`Rate limit exceeded. Retrying in ${waitTime}ms...`);
                    await this.sleep(waitTime);
                    continue; // Retry the request
                }

                // Throw an error for other non-OK statuses
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
                }

                // Return the successful response
                return responseMessage;
            } catch (error) {
                if (attempt === retries) {
                    console.error('Request failed after retries:', error.message);
                    throw error; // Rethrow after all retries are exhausted
                }
                console.warn(`Retrying (${attempt + 1}/${retries}) in ${delay}ms...`);
                await this.sleep(delay);
                delay *= 2; // Exponential backoff
            }
        }
    }

    async initiateSession(flowId, langflowId, inputValue, inputType = 'chat', outputType = 'chat', stream = false, tweaks = {}) {
        const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
        return this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks: tweaks });
    }

    handleStream(streamUrl, onUpdate, onClose, onError) {
        const eventSource = new EventSource(streamUrl);
        eventSource.onmessage = event => {
            const data = JSON.parse(event.data);
            onUpdate(data);
        };

        eventSource.onerror = event => {
            console.error('Stream Error:', event);
            onError(event);
            eventSource.close();
        };

        eventSource.addEventListener("close", () => {
            onClose('Stream closed');
            eventSource.close();
        });

        return eventSource;
    }

    async runFlow(flowIdOrName, langflowId, inputValue, inputType = 'chat', outputType = 'chat', tweaks = {}, stream = false, onUpdate, onClose, onError) {
        try {
            const initResponse = await this.initiateSession(flowIdOrName, langflowId, inputValue, inputType, outputType, stream, tweaks);
            if (stream && initResponse && initResponse.outputs && initResponse.outputs[0].outputs[0].artifacts.stream_url) {
                const streamUrl = initResponse.outputs[0].outputs[0].artifacts.stream_url;
                this.handleStream(streamUrl, onUpdate, onClose, onError);
            }
            return initResponse;
        } catch (error) {
            console.error('Error running flow:', error.message);
            onError('Error initiating session');
        }
    }
}

export default LangflowClient;
