const { register, getUser, activeUser } = require("../models/userModel");
const {
	saltGenerator,
	tokenGenerator,
} = require("../../public/js/stringGenerator");
const md5 = require("md5");

const registerUser = async (data) => {
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
	console.log(emailObj);
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
	console.log(alluser);
	console.log("Email:", loginEmail);
	console.log("Pass:", loginPassword);
	//
	if (alluser.length === 1) {
		userName = alluser[0].user_name;
		userPsw = alluser[0].password;
		userSalt = alluser[0].saltKey;

		//? Now
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

module.exports = { registerUser, verifyUser, verifyEmail, loginUser };
