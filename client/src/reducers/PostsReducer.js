export const POST_ACTIONS = {
	fetch: "FETCH_ALL",
	create: "CREATE_NEW_POST",
	update: "UPDATE_POST",
	delete: "DELETE_POST",
};

const POSTS_REDUCER = (posts = [], action) => {
	switch (action.type) {
		case POST_ACTIONS.create:
			return [...posts, action.payload];
		case POST_ACTIONS.fetch:
			return [...posts, ...action.payload];
		case POST_ACTIONS.update:
			return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
		case POST_ACTIONS.delete:
			return posts.filter((post) => post._id !== action.payload.id);
		default:
			return posts;
	}
};

export const CURRENT_POST_ACTION = {
	update: "UPDATE_CURRENT_ID",
	clear: "CLEAR_CURRENT_ID",
};

export const EMPTY_SELECTED_POST = { creator: "", title: "", message: "", tags: "", selectedFile: "" };

export const CURRENT_POST = (post = EMPTY_SELECTED_POST, action) => {
	switch (action.type) {
		case CURRENT_POST_ACTION.update:
			return action.payload;
		case CURRENT_POST_ACTION.clear:
			return EMPTY_SELECTED_POST;
		default:
			return post;
	}
};

export default POSTS_REDUCER;
