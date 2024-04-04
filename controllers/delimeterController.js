const { studentConnection } = require("../.config/dbConnect");

const filterGet = (req, res) => {
	res.render("pages/dynamicGrid/filter");
};

const filterPost = (req, res) => {
	// Getting Search Value
	let search = req.body.search;
	// Empty array to store op

	if (search == undefined || search == null || !search) {
		let all = "select*from student_master limit 200";
		studentConnection.query(all, function (err, allrec) {
			let keys = Object.keys(allrec[0]);
			res.render("pages/filter", { data: allrec, heading: keys });
		});
	}

	let op = [];
	// getting' values in array
	let value = search.split(/[_^&{}:;]/g);
	//Printing Values

	for (let i = 0; i < search.length; i++) {
		if ("^{}:;_".indexOf(search[i]) != -1) {
			op.push(search[i]);
		}
	}

	for (let j = 0; j < value.length; j++) {
		console.log(value[j + 1]);
	}

	for (let i = 0; i < op.length; i++) {
		switch (op[i]) {
			case ":":
				op[i] = "firstname";
				break;
			case "^":
				op[i] = "lastname";
				break;
			case "{":
				op[i] = "city";
				break;
			case "}":
				op[i] = "state";
				break;
			case ";":
				op[i] = "department";
				break;

			default:
				break;
		}
	}

	// Empty Object
	var myObj = {};
	// Inserting Values
	op.forEach((op, i) => {
		myObj[op] = value[i + 1];
	});

	let whereClause = "";

	for (const key in myObj) {
		whereClause += `${key} LIKE '%${myObj[key]}%' AND `;
	}

	whereClause = whereClause.substring(0, whereClause.length - 4);

	let sql = `Select * from student_master where ${whereClause}`;

	studentConnection.query(sql, function (err, result) {
		if (err) {
			res.send("No Such Records !!!!");
		}

		let keys = Object.keys(result[0]);
		res.render("pages/dynamicGrid/filter", {
			data: result,
			heading: keys,
			val: search,
		});
	});
};

module.exports = { filterGet, filterPost };
