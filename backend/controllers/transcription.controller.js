import fs from "fs";
import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({ apiKey: process.env.ASSEMBLYAI_API_KEY });

const transcribeAudio = async (req, res) => {
  try {
    const audioPath = req.file.path; // Path of the uploaded audio file

    // Upload audio to AssemblyAI
    const audioUrl = await uploadToAssemblyAI(audioPath);

    // Transcribe audio
    const config = { audio_url: audioUrl };
    const transcript = await client.transcripts.transcribe(config);

    // Cleanup uploaded audio file
    fs.unlinkSync(audioPath);

    // Respond with the transcription text
    res.json({ transcription: transcript.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to transcribe audio" });
  }
};

const uploadToAssemblyAI = async (audioPath) => {
  const data = fs.readFileSync(audioPath); // Read the audio file
  const response = await client.files.upload(data); // Upload to AssemblyAI
  return response.upload_url; // Return the upload URL
};

export { transcribeAudio };
