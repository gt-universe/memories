import express from "express";
import { getPosts, createPosts, updatePost, deletePost } from "../controllers/PostsController.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
