const express = require("express");
const route = express.Router();
const dotenv = require("dotenv").config();

route.get("/", (req, res) => {
	res.send("Running Too!");
});

module.exports = route;
