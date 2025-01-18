import connectDB from "../db/index.js";
import ApiResponse from "../utills/ApiResponse.js";
import ApiError from "../utills/ApiError.js";


async function getAllPosts(req, res) {
  try {
    const db = await connectDB();
    const postCollection = db.collection('faq');
    
    // Execute the query and fetch all documents
    const cursor = await postCollection.find();
    const documents = await cursor.toArray(); // Fetch all documents into an array
    
    if (documents.length === 0) {
      return res.json(new ApiResponse(200, [], "No posts found"));
    }

    res.json(new ApiResponse(200, documents, "Posts retrieved successfully"));
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json(new ApiError(500, error.message));
  }
}



async function createPost(req, res) {
  try {
    await connectDB();
    const post = req.body;
    if(!db) {
      return new ApiError(500, "Database connection failed");
    }
    const newPost = await postCollection.create(post);
    res.json(new ApiResponse(201, newPost, "Post created successfully"));
  } catch (error) {
    return new ApiError(500, error.message);
  }
}

export { getAllPosts, createPost };