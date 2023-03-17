const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.index);

router
	.route("/new")
	.get(indexController.displayNewMsgForm)
	.post(indexController.addNewMsg);

module.exports = router;
