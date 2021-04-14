import { combineReducers } from "redux";
import posts, { CURRENT_POST } from "./PostsReducer";

export default combineReducers({
	posts,
	currentPost: CURRENT_POST,
});
