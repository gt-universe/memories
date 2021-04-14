import * as api from "../api/Api";
import { POST_ACTIONS } from "../reducers/PostsReducer";

export const getPosts = () => async (dispatch) => {
	try {
		const payload = await api.fetchPosts();
		dispatch({ type: POST_ACTIONS.fetch, payload });
	} catch (error) {
		console.log("🚀 ~ file: PostsActions.js ~ line 8 ~ getPosts ~ error", error);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const payload = await api.createPost(post);
		console.log("🚀 ~~~~~~~~~~~~~~~~~~~ createPost ~ payload", payload);
		dispatch({ type: POST_ACTIONS.create, payload });
	} catch (error) {
		console.log("🚀 ~ file: PostsActions.js ~ line 16 ~ createPost ~ error", error);
	}
};

export const updatePost = (updatedPost) => async (dispatch) => {
	try {
		const updatedPostPayload = await api.updatePost(updatedPost);
		console.log(updatedPost);
		dispatch({ type: POST_ACTIONS.update, payload: updatedPostPayload });
	} catch (error) {
		console.log("🚀 ~ file: PostsActions.js ~ line 27 ~ updatePost ~ error", error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		const response = api.deletePost(id);
		dispatch({ type: POST_ACTIONS.delete, payload: { id } });
	} catch (error) {
		console.log("🚀 ~ file: PostsActions.js ~ line 37 ~ deletePost ~ error", error);
	}
};
