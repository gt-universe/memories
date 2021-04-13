import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { errorLogger, infoLogger, successLogger } from "./src/core/LoggerUtils.js";
import PostRoutes from "./routes/Posts.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/post", PostRoutes);

const CONNECTION_URL = `mongodb+srv://hello:hello@cluster0.ot9ne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	successLogger("Mongo connection established");
});

app.listen(PORT, () => infoLogger(`Application started at ${PORT} `));
mongoose.set("useFindAndModify", false);
