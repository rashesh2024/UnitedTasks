const mysql = require("mysql");
const mysql2 = require("mysql2/promise");
const dotenv = require("dotenv").config();

let studentConnection = mysql.createConnection({
	host: process.env.HOST,
	database: process.env.STUD_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

let student2Connection = mysql.createConnection({
	host: process.env.HOST,
	database: process.env.STUD_DATABASE2,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

// let = mysql.createConnection({
// 	host: process.env.HOST,
// 	database: process.env.EMPLOYE_DB,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// });

const employeConnection = async () => {
	var response = null;
	var conn;
	try {
		conn = await mysql2.createConnection({
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

let userConnection = mysql.createConnection({
	host: process.env.HOST,
	database: process.env.USER_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

studentConnection.connect((err) => {
	if (err) throw err;
	console.log("connected to StudentDB_26Feb!");
});

student2Connection.connect((err) => {
	if (err) throw err;
	console.log("connected to studentDB_27Feb!");
});

// employeConnection.connect((err) => {
// 	if (err) throw err;
// 	console.log("connected to job_app_db_29!");
// });

userConnection.connect((err) => {
	if (err) throw err;
	console.log("connected to userdb!");
});

module.exports = {
	studentConnection,
	student2Connection,
	employeConnection,
	userConnection,
};
