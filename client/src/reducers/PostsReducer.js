export const POST_ACTIONS = {
	fetch: "FETCH_ALL",
	create: "CREATE_NEW_POST",
	update: "UPDATE_POST",
};

const POSTS_REDUCER = (posts = [], action) => {
	switch (action.type) {
		case POST_ACTIONS.create:
			return [...posts, action.payload];
		case POST_ACTIONS.fetch:
			return [...posts, ...action.payload];
		case POST_ACTIONS.update:
			return [...posts, ...action.payload];
		default:
			return posts;
	}
};

export const CURRENT_POST_ACTION = {
	update: "UPDATE_CURRENT_ID",
	clear: "CLEAR_CURRENT_ID",
};

export const CURRENT_POST = (post = {}, action) => {
	switch (action.type) {
		case CURRENT_POST_ACTION.update:
			return action.payload;
		case CURRENT_POST_ACTION.clear:
			return null;
		default:
			return post;
	}
};

export default POSTS_REDUCER;
