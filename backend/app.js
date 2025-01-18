import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import langflowRoutes from "./routes/LangFlow.route.js";
import postRouter from "./routes/Posts.route.js";
import transcriptionRoutes from "./routes/transcriptionRoutes.js";

const app = express();


app.use(cors(
  //   {
  //   origin: "https://insightify2-phi.vercel.app",
  //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   credentials: true,
  // }
));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/v1/langflow", langflowRoutes); // Mount the Langflow routes
app.use("/api/v1/posts", postRouter); // Mount the Posts routes
app.use("/api/transcribe", transcriptionRoutes);


// Serve static assets in production
  app.get("/", (req, res) => {
    res.send("API is Running Successfully");
  });

  app.use("*", (req, res) => {
    res.send("Invalid Endpoint");
  }
);


// Export the app for deployment
export { app };
