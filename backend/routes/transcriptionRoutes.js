import express from "express";
import multer from "multer";
import { transcribeAudio } from "../controllers/transcription.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files

router.post("/", upload.single("audio"), transcribeAudio);

export default router;
