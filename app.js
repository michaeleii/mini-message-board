const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT | 3000;

app.use(express.static("public"));

// view engine setup
app.set("views", "views");
app.use("view engine", "ejs");

app.use(morgan("dev"));

app.listen(port, () => {
	console.log("Server is listening on port 3000");
});
