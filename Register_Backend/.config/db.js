const dotenv = require("dotenv").config();
const mysql = require("mysql");

let conn = mysql.createConnection({
	host: process.env.HOST,
	database: process.env.DATABASE,
	user: process.env.DB_USER,
	password: process.env.PASSWORD,
});

conn.connect((err) => {
	if (err) throw err;
});

module.exports = conn;
