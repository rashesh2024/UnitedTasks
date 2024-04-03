const express = require("express");
const route = express.Router();
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const {
	registerUser,
	verify,
	verifyMail,
	login,
	chekcLogin,
} = require("../controllers/userController");
const { insertEmploye } = require("../controllers/employeController");

route.use(cookieParser());

route.get("/", (req, res) => {
	res.send("Running Too!");
});
route.post("/register", registerUser);
route.post("/matchCreds", verify);
route.post("/verifyEmail", verifyMail);
route.post("/login", login);
route.post("/profile", chekcLogin);

//Job Application routes

route.post("/insertData", insertEmploye);

module.exports = route;
