import express from "express";
import { getPosts, createPosts, updatePost } from "../controllers/PostsController.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.put("/:id", updatePost);
export default router;
