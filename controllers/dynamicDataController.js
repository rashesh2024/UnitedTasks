const { student2Connection } = require("../.config/dbConnect");

let len;
var query;

const postGetInfo = (req, res) => {
	query = req.body.select;
	let page = req.query.page || 1;
	let mypage = req.url;

	student2Connection.query(query, function (err, result, fields) {
		//Finding Keys of Records
		let keys = Object.keys(result[0]);
		len = result.length;

		// Getting Length of all records
		query += " LIMIT " + (page - 1) * 20 + ",20;";
		student2Connection.query(query, function (err, result2, fields) {
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
};

const getGetInfo = (req, res) => {
	let page = req.query.page || 1;
	let query = req.query.query;

	if (query) {
		let newQuery = query;
		if (query.indexOf(" LIMIT ") && page < 6) {
			newQuery = query.substring(0, query.length - 12);
		} else {
			newQuery = query.substring(0, query.length - 14);
		}
		student2Connection.query(newQuery, function (err, result, fields) {
			let keys = Object.keys(result[0]);
			len = result.length;
			newQuery += "  LIMIT " + (page - 1) * 20 + ",20;";
			student2Connection.query(newQuery, function (err, result2, fields) {
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
};

module.exports = { getGetInfo, postGetInfo };
