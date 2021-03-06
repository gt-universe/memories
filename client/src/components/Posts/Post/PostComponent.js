import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { CURRENT_POST_ACTION } from "../../../reducers/PostsReducer";
import { updatePost, deletePostAction } from "../../../actions/PostsActions";

function Post(props) {
	const classes = useStyles();
	const { post } = props;
	const dispatch = useDispatch();

	const editPost = () => {
		dispatch({ type: CURRENT_POST_ACTION.update, payload: post });
	};

	const updateLike = () => {
		let likePayload = JSON.parse(JSON.stringify(post));
		likePayload.likeCount += 1;
		dispatch(updatePost(likePayload));
	};

	const deletePost = () => {
		dispatch(deletePostAction(post._id));
	};

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={post.selectedFile || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} title={post.title} />
			<div className={classes.overlay}>
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button style={{ color: "white" }} size="small" onClick={editPost}>
					<MoreHorizIcon fontSize="default" />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary" component="h2">
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<Typography className={classes.title} gutterBottom variant="h5" component="h2">
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary" onClick={updateLike}>
					<ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
				</Button>
				<Button size="small" color="primary" onClick={deletePost}>
					<DeleteIcon fontSize="small" /> Delete
				</Button>
			</CardActions>
		</Card>
	);
}

export default Post;
