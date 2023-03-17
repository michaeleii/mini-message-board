const messages = require("../models/messages");

const index = (req, res, next) => {
	const messagesFormatted = messages.map((message) => {
		return {
			...message,
			added: message.added.toLocaleString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric",
				year: "numeric",
				hour: "numeric",
				minute: "numeric",
				timezone: "PST",
			}),
		};
	});
	res.render("index", { messages: messagesFormatted });
};

const displayNewMsgForm = (req, res, next) => {
	res.render("form");
};

const addNewMsg = (req, res, next) => {
	const { text, user } = req.body;
	messages.push({ text, user, added: new Date(Date.now()) });
	res.redirect("/");
};

module.exports = { index, displayNewMsgForm, addNewMsg };
