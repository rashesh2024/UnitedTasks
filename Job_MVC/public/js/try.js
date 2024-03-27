const dbconnect = require("../../config/dbconnect");

var conn;

async function queryExecuter(conn, data, query) {
	console.log(data);
	try {
		let record;
		if (conn) {
			let insertBasic = await new Promise((resolve, reject) => {
				conn.query(query, [data], (err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result.insertId);
						console.log("run");
					}
				});
			});

			try {
				record = await insertBasic;
				console.log(record);
			} catch (error) {
				console.log("E:", err);
			}

			return record;
		}
	} catch (error) {
		return error;
	}
}
// var querySqls = [
// 	"insert into employe_master (fname,lname,designation,curr_add,per_add,phone,email,city,gender,zipcode,state,relationship,dob) values (?)",
// ];
// var queryValuesArr = [
// 	[await insertedId, "Gujarat", "Development", "7,50,000", "4,50,000", "1"],
// ];
async function ok(params) {
	conn = await dbconnect();
	let insertedId;

	const insQuery = [
		"insert into employe_master (fname,lname,designation,curr_add,per_add,phone,email,city,gender,zipcode,state,relationship,dob) values (?)",
		"insert into reference (emp_id,ref_name,ref_contact,ref_relation) values (?)",
		"insert into preference (emp_id,pref_location,Department,Expected_ctc,Current_ctc,Notice_period) values (?)",
	];

	let datas = [
		[
			"Prathvik",
			"Patel",
			"Software Engineer",
			"asdf asvsdfv Sdf",
			"facsdv zsdfs",
			"+91 8527410000",
			"rashesh@gmail.com",
			"Mumbai",
			"Male",
			"741012",
			"Maharashtra",
			"Unmarried",
			"2002-08-14",
		],
		["rashesh", 7490953055, "Brother"],
		["Gujarat", "Development", "7,50,000", "4,50,000", "1"],
	];
	// for (let i = 0; i < insQuery.length; i++) {
	// 	console.log(insQuery[i]);
	// 	console.log(datas[i]);
	// }

	var i = 0;
	let flag = true;
	while (i < insQuery.length) {
		if (flag) {
			insertedId = queryExecuter(conn, datas[i], insQuery[i]);
			flag = false;
		} else {
			let arr = datas[i];
			arr.unshift(await insertedId);
			// console.log(await insertedId);
			// console.log(arr);
			// console.log(arr.splice(0, 0, await insertedId));
			queryExecuter(conn, arr, insQuery[i]);
		}
		// console.log(i);
		// i++;
		// new Promise((resolve, reject) => {
		// 	resolve();
		// 	console.log("resolve thayu");

		// }).then((data) => {
		// 	console.log("i ma aayu");
		// });
		i++;
	}
	// let insertedId = queryExecuter();
	console.log("down: " + (await insertedId));
	// queryExecuter(
	// 	conn,
	// 	[await insertedId, "Gujarat", "Development", "7,50,000", "4,50,000", "1"],
	// 	"insert into preference (emp_id,pref_location,Department,Expected_ctc,Current_ctc,Notice_period) values (?)"
	// );
	// return await dbconnect();
}

ok();
