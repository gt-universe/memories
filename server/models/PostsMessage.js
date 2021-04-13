import mongoose from "mongoose";

const postMessage = mongoose.Schema({
	title: String,
	tags: [String],
	message: String,
	creator: String,
	selectedFile: String,
	likeCount: {
		default: 0,
		type: Number,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const PostMessage = mongoose.model("PostMessage", postMessage);
export default PostMessage;
