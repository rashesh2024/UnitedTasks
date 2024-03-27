const path = require("path");
const dotenv = require("dotenv").config({
	path: path.join(__dirname, "../.env"),
});
const mysql = require("mysql2/promise");

const connection = async () => {
	var response = null;
	var conn;
	try {
		conn = await mysql.createConnection({
			host: process.env.HOST,
			database: process.env.DATABASE,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
		});
		// console.log("res:", response);
		return await conn;
	} catch (error) {
		console.log(error);
		return error;
	}
};

module.exports = connection;
