// import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
// import fs from "fs";
// import { AssemblyAI } from "assemblyai";



// // Transcribe uploaded file
// const transcribeFile = async (req, res) => {
//   const filePath = req.file.path; // Path of uploaded file
//   const fileType = req.file.mimetype;
//   const ffmpeg = createFFmpeg({ log: true });
//   const client = new AssemblyAI({ apiKey: process.env.ASSEMBLYAI_API_KEY });

//   try {
//     if (fileType.startsWith("video")) {
//       // Extract audio from video
//       const audioPath = `uploads/${Date.now()}_audio.mp3`;

//       if (!ffmpeg.isLoaded()) await ffmpeg.load();

//       ffmpeg.FS("writeFile", "input", await fetchFile(filePath));
//       await ffmpeg.run("-i", "input", "-q:a", "0", "-map", "a", "output.mp3");
//       const audioData = ffmpeg.FS("readFile", "output.mp3");

//       fs.writeFileSync(audioPath, audioData);

//       try {
//         const transcript = await transcribeAudio(audioPath);
//         cleanupFiles([filePath, audioPath]);
//         res.json({ transcription: transcript });
//       } catch (error) {
//         cleanupFiles([filePath, audioPath]);
//         console.error(error);
//         res.status(500).json({ error: "Transcription failed" });
//       }
//     } else if (fileType.startsWith("audio")) {
//       // Transcribe audio directly
//       try {
//         const transcript = await transcribeAudio(filePath);
//         cleanupFiles([filePath]);
//         res.json({ transcription: transcript });
//       } catch (error) {
//         cleanupFiles([filePath]);
//         console.error(error);
//         res.status(500).json({ error: "Transcription failed" });
//       }
//     } else {
//       cleanupFiles([filePath]);
//       res.status(400).json({ error: "Invalid file type. Only video or audio files are allowed." });
//     }
//   } catch (err) {
//     console.error(err);
//     cleanupFiles([filePath]);
//     res.status(500).json({ error: "An error occurred" });
//   }
// };

// // Transcribe audio using AssemblyAI
// const transcribeAudio = async (filePath) => {
//   const data = fs.readFileSync(filePath);
//   const response = await client.files.upload(data);
//   const config = { audio_url: response.upload_url };
//   const transcript = await client.transcripts.transcribe(config);
//   return transcript.text;
// };

// // Cleanup uploaded files
// const cleanupFiles = (files) => {
//   files.forEach((file) => {
//     if (fs.existsSync(file)) fs.unlinkSync(file);
//   });
// };

// export default transcribeFile;
