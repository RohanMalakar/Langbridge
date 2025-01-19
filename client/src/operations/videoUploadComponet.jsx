// import React, { useState } from "react";
// import axios from "axios";

// const VideoUploadComponent = () => {
//   const [file, setFile] = useState(null);
//   const [transcription, setTranscription] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];

//     // Check if the file type is valid
//     if (selectedFile && (selectedFile.type === "video/mp4" || selectedFile.type === "video/quicktime")) {
//       setFile(selectedFile);
//       setTranscription("");
//       setError("");
//     } else {
//       setFile(null);
//       setError("Invalid file type. Please upload only .mp4 or .mov files.");
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setError("Please select a video file first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("video", file);

//     setIsLoading(true);
//     setError("");
//     setTranscription("");

//     try {
//       const response = await axios.post("http://localhost:3001/api/transcribe", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setTranscription(response.data.transcription);
//     } catch (err) {
//       setError("Failed to transcribe the video. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Upload Video for Transcription</h2>
//       <input
//         type="file"
//         accept=".mp4,.mov"
//         onChange={handleFileChange}
//         className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500"
//       />
//       <button
//         onClick={handleUpload}
//         disabled={isLoading}
//         className={`w-full mt-4 px-4 py-2 text-white font-semibold rounded-md ${
//           isLoading
//             ? "bg-blue-300 cursor-not-allowed"
//             : "bg-blue-500 hover:bg-blue-600"
//         }`}
//       >
//         {isLoading ? "Processing..." : "Upload and Transcribe"}
//       </button>

//       {transcription && (
//         <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-md">
//           <h3 className="text-lg font-semibold text-gray-800">Transcription:</h3>
//           <p className="text-gray-700">{transcription}</p>
//         </div>
//       )}

//       {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
//     </div>
//   );
// };

// export default VideoUploadComponent;
