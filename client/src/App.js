import React, { useEffect } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import Posts from "./components/Posts/PostsComponent";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import memories from "./images/memories.png";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/PostsActions";

function App() {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2" align="center">
					Memories
				</Typography>
				<img className={classes.image} src={memories} alt="icon" height="60" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justify="space-between" alignItems="stretch" spacing={3}>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;
