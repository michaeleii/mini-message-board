const messages = require("../models/messages");

const index = (req, res, next) => {
	res.render("index", { title: "Mini Messageboard", messages });
};

const createMsg = (req, res, next) => {};

module.exports = { index, createMsg };
