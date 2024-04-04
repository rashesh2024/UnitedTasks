const { studentConnection } = require("../.config/dbConnect");

var sortBy = "1";
var data = [];

const studentData = (req, res) => {
	//  Getting Page number
	let page = req.query.page || 1;

	if (req.query.sortBy) {
		sortBy = req.query.sortBy;
	}

	var len;
	let sqllen = "SELECT count(*) as length from student_master ;";

	//? Execution
	studentConnection.query(sqllen, function (err, result) {
		len = result[0].length;
		console.log(len);
	});

	//? Setting Limit of Invalid Pages
	if (page * 20 > len || page < 1) {
		console.log(len);
		res.send("Invalid Page Number!!!");
	}

	let sql =
		"Select * from student_master ORDER BY " +
		sortBy +
		" LIMIT " +
		(page - 1) * 20 +
		",20;";

	//? Execution
	studentConnection.query(sql, function (err, result) {
		//
		//? Displaying The Data along with record length and and Current Page NUmber
		res.render("pages/students/std_data", {
			fdata: result,
			length: len,
			currentPage: page,
			sortBy: sortBy,
		});
	});
};

module.exports = studentData;
