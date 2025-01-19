import axios from "axios"

// Send text data
export default async function sendTextInput(langData,setFetching) {
  console.log("langData", langData)
  const object = {
    inputValue: langData,
  }
  try {
    setFetching(()=>true)
    const res = await axios.post('http://localhost:3001/api/v1/langflow/run-flow', object)
    // console.log("RESPONSE : ",res)
    setFetching(()=>false)
    return res.data.output;
  } catch (error) {
    console.log('Erroro to send input :', error)
  }
}

// Send file data
export const sendAudioFile = async(audioFile) =>{
  try {
    // Create a FormData object to hold the file
    const formData = new FormData();
    formData.append('audio', audioFile); // 'audio' is the field name expected by the backend

    // Send a POST request to the backend API
    const response = await axios.post('http://localhost:3003/api/transcribe', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure correct content type
      },
    });
    // Log or return the response from the backend
    console.log('Response Audio:', response.data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error uploading audio file:', error);
    throw error;
  }
}

