const express = require("express");
const route = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const cookieParser = require("cookie-parser");

//
const sendMail = require("../controllers/nodemailer");
const {
	registerUser,
	verifyUser,
	verifyEmail,
	loginUser,
} = require("../controllers/userController");

route.use(cookieParser());

//

route.get("/", (req, res) => {
	res.send("Running Too!");
});

route.post("/register", async (req, res) => {
	let data = req.body;
	let output = await registerUser(data);
	res.json(output);
});

route.post("/sendMail", async (req, res) => {
	let uData = req.body;
	console.log(uData);
	let mailId = sendMail(uData);

	res.json(mailId);
});

route.post("/matchCreds", async (req, res) => {
	let uData = req.body;
	let resp = await verifyUser(uData);

	res.json(resp);
});

route.post("/verifyEmail", async (req, res) => {
	console.log("hello i am route!!"); // if (token) {
	// 	let jwtSecretKey = process.env.JWT_SECRET_KEY;
	// 	var verfiy = jwt.verify(token, jwtSecretKey);
	// 	res.send("welcome to dashboard");
	// }

	console.log(resp);
	res.json({ msg: resp });
});

route.post("/login", async (req, res) => {
	let data = req.body;

	let jwtSecretKey = process.env.SECRETE_KEY;
	// Authorizaion
	let user = {
		user: data.email,
	};
	const token = jwt.sign(user, jwtSecretKey);
	console.log("Token", token);

	let result = await loginUser(data);
	res.json({ status: result, token: token });
	// res
	// 	.cookie("token", token, { httpOnly: true })
	// 	.status(200)
	// 	.json({ status: result, token: token });
});

route.post("/profile", (req, res) => {
	var token = req.cookies.token;
	console.log("Cookie", token);
	if (token) {
		let jwtSecretKey = process.env.SECRET_KEY;
		var verify = jwt.verify(token, jwtSecretKey);
		if (verify) res.json({ msg: "Welcome" });
	}
});

module.exports = route;

// return res.status(401).json({ error: "Authentication failed" });
