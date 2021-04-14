import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useStyle from "./style";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/PostsActions";
import { CURRENT_POST_ACTION } from "../../reducers/PostsReducer";

function Form() {
	const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
	const dispatch = useDispatch();
	const currentPost = useSelector((globalState) => globalState.currentPost);

	console.log(currentPost);
	const classes = useStyle();

	const isCurrentPostAvailable = () => !!Object.keys(currentPost).length;

	useEffect(() => {
		setPostData(currentPost);
	}, [currentPost]);

	const onSubmit = (event) => {
		try {
			event.preventDefault();
			if (isCurrentPostAvailable()) dispatch(updatePost(postData));
			else dispatch(createPost(postData));
			clear();
		} catch (err) {
			console.log("🚀 ~ file: Form.js ~ line 26 ~ onSubmit ~ err", err);
		}
	};

	const clear = () => {
		setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
		if (isCurrentPostAvailable()) dispatch({ type: CURRENT_POST_ACTION.clear });
	};

	return (
		<Paper className={classes.paper}>
			<form autoComplete="off" noValidate onSubmit={onSubmit} className={classes.form}>
				<Typography variant="h6"> Creating a Memory</Typography>
				<TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
				<TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
				<TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
				<TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })} />
				<div className={classes.fileInput}>
					<FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
				</div>
				<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
					Submit
				</Button>
				<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
					Clear
				</Button>
			</form>
		</Paper>
	);
}

export default Form;