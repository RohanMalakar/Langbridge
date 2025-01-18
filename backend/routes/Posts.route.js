// Import Express
import express from 'express';
import  {getAllPosts , createPost} from '../controllers/Posts.controller.js';
const postRouter = express.Router();

// Route to get all posts
postRouter.get('/', getAllPosts);

// Route to create a new post
postRouter.post('/', createPost);

export default postRouter;
