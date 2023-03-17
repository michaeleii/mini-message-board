require("dotenv").config();
const express = require("express");
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT | 3000;

// Set up mongoose connection
const connectDB = require("./databaseConnection");
connectDB().catch((err) => console.log(err));

app.use(express.static("public"));

// view engine setup
app.set("views", "views");
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(port, () => {
	console.log("Server is listening on port 3000");
});

module.exports = app;
