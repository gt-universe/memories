import PostMessage from "../models/PostsMessage.js";
import { errorLogger } from "../src/core/LoggerUtils.js";

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
createPosts;
