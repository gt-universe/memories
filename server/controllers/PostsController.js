import PostMessage from "../models/PostsMessage.js";
import { errorLogger } from "../src/core/LoggerUtils.js";
import { REST_STATUS } from "../src/core/RestStatus.js";
import mongoose from "mongoose";

export const getPosts = async (req, response) => {
	try {
		const posts = await PostMessage.find();
		response.status(200).json(posts);
	} catch (error) {
		errorLogger(`Failed at DB fetching ${error}`);
	}
};

export const createPosts = async (request, response) => {
	const post = request.body;
	try {
		const newPost = new PostMessage(post);
		console.log(`Incoming request -->`, post);
		const createdPost = await newPost.save();
		response.status(201).json(createdPost);
	} catch (error) {
		errorLogger(`Failed at DB fetching ${error}`);
		response.status(401).json({ message: "Failed to create", error });
	}
};

export const updatePost = async (request, response) => {
	try {
		const { id: _id } = request.params;
		const postPayload = request.body;
		if (!isValidId(_id)) throw Error("Invalid post ID");
		const updatedPost = await PostMessage.findByIdAndUpdate(_id, postPayload, {
			new: true,
		});
		if (!updatedPost) throw Error("No record found");
		response.status(REST_STATUS.SUCCESSFULLY_UPDATED).json(updatedPost);
	} catch (error) {
		console.log("🚀 ~ file: PostsController.js ~ line 30 ~ updatePost ~ error", error);
		response.status(400).json({ message: "Failed to update", reason: error.message });
	}
};

export const deletePost = async (request, response) => {
	try {
		const { id: _id } = request.params;
		await PostMessage.findByIdAndRemove(_id);
		response.status(REST_STATUS.SUCCESSFULLY_DELETED).json({ message: "Successfully deleted the post" });
	} catch (error) {
		console.log("🚀 ~ file: PostsController.js ~ line 49 ~ deletePost ~ error", error);
	}
};

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);
