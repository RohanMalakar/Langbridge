import fs from "fs";
import path from "path";
import ffmpeg  from "fluent-ffmpeg";
import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({ apiKey: process.env.ASSEMBLYAI_API_KEY });

const transcribeVideo = async (req, res) => {
  try {
    const videoPath = req.file.path;
    const audioPath = `uploads/${Date.now()}_audio.mp3`;

    // Extract audio from video
    ffmpeg(videoPath)
      .output(audioPath)
      .on("end", async () => {
        try {
          // Upload audio to AssemblyAI
          const audioUrl = await uploadToAssemblyAI(audioPath);

          // Transcribe audio
          const config = { audio_url: audioUrl };
          const transcript = await client.transcripts.transcribe(config);

          // Cleanup files
          fs.unlinkSync(videoPath);
          fs.unlinkSync(audioPath);

          res.json({ transcription: transcript.text });
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: "Failed to transcribe audio" });
        }
      })
      .on("error", (err) => {
        console.error(err);
        res.status(500).json({ error: "Failed to process video" });
      })
      .run();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
};

const uploadToAssemblyAI = async (audioPath) => {
  const data = fs.readFileSync(audioPath);
  const response = await client.files.upload(data);
  return response.upload_url;
};

export { transcribeVideo };
