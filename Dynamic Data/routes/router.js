const express = require("express");
const route = express.Router();
const mysql = require("mysql");

const conn = mysql.createConnection({
	host: "127.0.0.1",
	database: "studentDB_27feb",
	user: "root",
	password: "root",
});

//! Connection to the database
conn.connect(function (err) {
	if (err) throw err;
	console.log("Database Connection Successfull !!");
});

//? Rendering Home Page
route.get("/", (req, res) => {
	res.render("pages/home");
});
// route.get("/getData", (req, res) => {
// 	res.render("pages/get_data");
// });

let len;
var query;

//
//
route.post("/getinfo", (req, res) => {
	query = req.body.select;
	let page = req.query.page || 1;

	let mypage = req.url;

	conn.query(query, function (err, result, fields) {
		//Finding Keys of Records
		let keys = Object.keys(result[0]);

		len = result.length;
		// Getting Length of all records

		// query += " LIMIT 0,20;";
		query += " LIMIT " + (page - 1) * 20 + ",20;";

		conn.query(query, function (err, result2, fields) {
			// console.log(result2);
			res.render("pages/dynamicGrid/get_data", {
				len: len,
				heading: keys,
				data: result2,
				page: page,
				query: query,
				currPage: mypage,
			});
		});
	});
	// res.end();
});

route.get("/getinfo", (req, res) => {
	let page = req.query.page || 1;
	let query = req.query.query;

	if (query) {
		let mypage = req.url;
		// console.log(mypage, page, query);

		let newQuery = query;
		if (query.indexOf(" LIMIT ") && page < 6) {
			newQuery = query.substring(0, query.length - 12);
		} else {
			newQuery = query.substring(0, query.length - 14);
		}

		conn.query(newQuery, function (err, result, fields) {
			// console.log(err, result);
			//Finding Keys of Records

			let keys = Object.keys(result[0]);
			console.log(keys);

			len = result.length;
			console.log(len);
			// // Getting Length of all records

			// // query += " LIMIT 0,20;";
			newQuery += "  LIMIT " + (page - 1) * 20 + ",20;";

			conn.query(newQuery, function (err, result2, fields) {
				res.render("pages/dynamicGrid/get_data", {
					len: len,
					heading: keys,
					data: result2,
					page: page,
					query: newQuery,
					currPage: "/getinfo",
				});
			});
		});
	} else {
		res.render("pages/dynamicGrid/get_data");
	}
	// res.render("pages/get_data", { page: req.query.page || 1 });
	// res.end();
});

module.exports = route;
