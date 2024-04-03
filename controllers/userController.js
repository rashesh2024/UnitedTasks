const { register, getUser, activeUser } = require("../models/userModel");
const {
	saltGenerator,
	tokenGenerator,
} = require("../public/js/stringGenerator");
const md5 = require("md5");

//
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
//
const registerUsersProcess = async (data) => {
	let info = data;
	let passwordString = "";
	let encryptedPassword = "";
	let password = info.password1;

	// Removing Password
	info = Object.keys(info)
		.filter((objKey) => objKey !== "password2" && objKey !== "password1")
		.reduce((newInfo, key) => {
			newInfo[key] = info[key];
			return newInfo;
		}, {});

	let salt = saltGenerator();
	let token = tokenGenerator();
	passwordString += password + salt;

	encryptedPassword = md5(passwordString);

	info.password = encryptedPassword;
	info.salt = salt;
	info.token = token;

	let newData = [
		info.fname,
		info.lname,
		info.email,
		info.password,
		info.salt,
		info.token,
	];

	let result = await register(newData);
	return result;
};

const verifyUser = async (uData) => {
	let status;

	let sql = `select * from users where user_id = ${uData.user_id}`;
	let user = await getUser(sql);
	if (user[0].access_token === uData.access_token) {
		let update = `Update users set isActive = 1 where user_id = ${user[0].user_id}`;
		status = activeUser(update);
	}
	// console.log(uData);
	return status;
};

const verifyEmail = async (emailObj) => {
	let status = true;
	let sql = `select * from users`;
	let users = await getUser(sql);

	users.forEach((element) => {
		if (element.user_name === emailObj.email) {
			status = false;
		}
	});
	return status;
};

const loginUser = async (data) => {
	let status = false;
	let loginEmail = data.email;
	let loginPassword = data.password;
	let userName, userPsw, userSalt, match;
	//
	let userSql = `select * from users where user_name = '${loginEmail}'`;
	let alluser = await getUser(userSql);
	//
	if (alluser.length === 1) {
		userName = alluser[0].user_name;
		userPsw = alluser[0].password;
		userSalt = alluser[0].saltKey;

		match = md5(loginPassword + userSalt);
		if (match === userPsw) {
			console.log("Login Successfull");
			status = true;
		} else {
			console.log("Wrong Pasword");
		}
	}
	return status;
};

const registerUser = async (req, res) => {
	let data = req.body;
	let output = await registerUsersProcess(data);
	res.json(output);
};

const verifyMail = async (req, res) => {
	let resp;
	let email = req.body;
	resp = verifyEmail(email);
	res.json({ msg: resp });
};

const verify = async (req, res) => {
	let uData = req.body;
	let resp = await verifyUser(uData);
	res.json(resp);
};

const login = async (req, res) => {
	let data = req.body;
	let jwtSecretKey = process.env.SECRETE_KEY;
	// Authorizaion
	let user = {
		user: data.email,
	};
	const token = jwt.sign(user, jwtSecretKey, { expiresIn: "24h" });
	let result = await loginUser(data);
	// res.json({ status: result, token: token });
	console.log("this");
	res
		.cookie("token", token, { httpOnly: true })
		.status(200)
		.json({ status: result, token: token });
};
const chekcLogin = (req, res) => {
	var token = req.cookies.token;
	if (token) {
		let jwtSecretKey = process.env.SECRET_KEY;
		var verify = jwt.verify(token, jwtSecretKey);
		if (verify) res.json({ msg: "Welcome User" });
	}
};

module.exports = { registerUser, verify, verifyMail, login, chekcLogin };
