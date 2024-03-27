const app = require("express");
const route = app.Router();
const bodyParser = require("body-parser");
const connection = require("../config/dbconnect");
var {
	dispData,
	getData,
	getStates,
	getCities,
} = require("../controller/studentController");

// app.set("view engine", "ejs");

route.get("/", async (req, res) => {
	try {
		res.render("pages/home", { data: {} });
	} catch (error) {
		res.send(error);
	}
});

route.get("/stepForm", (req, res) => {
	try {
		res.render("pages/jobajax/index", { data: {} });
	} catch (error) {
		res.send(error);
	}
});

route.get("/form", (req, res) => {
	res.render("pages/job_form");
});

route.get("/state", async (req, res) => {
	let conn = await connection();
	let states = await getStates(conn);
	res.json(states);
});
route.get("/city", async (req, res) => {
	let stateId = req.query.id;
	let conn = await connection();
	let cities = await getCities(conn, stateId);
	res.json(cities);
	// res.end();
});

route.get("/getData", async (req, res) => {
	let result = {};
	let lang = {};

	if (req.query.id) {
		let emp_id = req.query.id;
		console.log(emp_id);
		let conn = await connection();
		let data = await getData(conn, emp_id);
		result.Basic = data.resultBasic[0][0];

		let hindi = data.resultLang[0][0];
		let english = data.resultLang[0][1];
		let gujarati = data.resultLang[0][2];
		lang.Hindi = hindi;
		lang.English = english;
		lang.Gujarati = gujarati;
		result.Lang = lang;
		result.Basic.dob = result.Basic.dob.toISOString().slice(0, 10);
		console.log(result);
		res.render("pages/job_form", {
			eid: req.query.id,
			data: result,
		});
	} else {
		res.render("pages/job_form", { data: {} });
	}
});

route.get("/urlGet", async (req, res) => {
	let result = {};
	let lang = {};

	if (req.query.id) {
		let emp_id = req.query.id;
		console.log(emp_id);
		let conn = await connection();
		let data = await getData(conn, emp_id);
		result.Basic = data.resultBasic[0][0];

		let hindi = data.resultLang[0][0];
		let english = data.resultLang[0][1];
		let gujarati = data.resultLang[0][2];
		lang.Hindi = hindi;
		lang.English = english;
		lang.Gujarati = gujarati;
		result.Lang = lang;
		result.Basic.dob = result.Basic.dob.toISOString().slice(0, 10);
		console.log(result);
		res.json(result);
	}
});

route.post("/data", async (req, res) => {
	let conn = await connection();
	let data = req.body;

	let request = req.query;
	let emp_id;
	if (request.id === "undefined") {
		emp_id = false;
	} else {
		emp_id = request.id;
		if (emp_id) {
			emp_id = emp_id.split("=")[1];
		}
	}

	if (emp_id) {
		try {
			let AllKey = Object.keys(data);

			let insertLang =
				"insert into language (emp_id,lan_name,can_read,can_write,can_speak) values";
			let languages = ["lk_hindi", "lk_english", "lk_gujarati"];

			languages.forEach((element) => {
				if (AllKey.includes(element)) {
					insertLang += `(${emp_id},`;
					insertLang += `'${element.split("_")[1]}',`;
					if (AllKey.includes("lk_" + element.split("_")[1][0] + "read")) {
						insertLang += `${1}, `;
					} else {
						insertLang += `${0}, `;
					}
					if (AllKey.includes("lk_" + element.split("_")[1][0] + "write")) {
						insertLang += `${1}, `;
					} else {
						insertLang += `${0}, `;
					}
					if (AllKey.includes("lk_" + element.split("_")[1][0] + "speak")) {
						insertLang += `${1}`;
					} else {
						insertLang += `${0}`;
					}
					insertLang += "),";
				}
			});
			insertLang = insertLang.substring(0, insertLang.length - 1);

			let updateBasic = `UPDATE employe_master SET fname = '${data.fname}',  lname = '${data.lname}',designation = '${data.designation}',curr_add = '${data.add1}',per_add ='${data.add1}',phone =  '${data.phn}', email =  '${data.email}', city =  '${data.city}', gender = '${data.gender}', zipcode =  '${data.zip}', state = '${data.state}', relationship = '${data.status}',dob = '${data.dob}' WHERE emp_id = ${emp_id}`;
			let updatePref = `UPDATE preference SET pref_location = '${data.location}',  Department = '${data.department}', Expected_ctc = '${data.expectedctc}', Current_ctc = '${data.currctc}',Notice_period ='${data.notice}' WHERE emp_id = ${emp_id}`;

			let deleteLang = `DELETE FROM language where emp_id = ${emp_id}`;

			await conn.query(updateBasic);
			await conn.query(updatePref);
			await conn.query(deleteLang);
			await conn.query(insertLang);

			res.send("Data Updated SuccessFully !!");
		} catch (error) {
			console.log("No thay :", error);
		}
	} else {
		let eid;
		let Basic = [
			data.fname,
			data.lname,
			data.designation,
			data.add1,
			data.add2,
			data.phn,
			data.email,
			data.city,
			data.gender,
			data.zip,
			data.state,
			data.status,
			data.dob,
		];
		// let insertBasic = `insert into employe_master (fname,lname,designation,curr_add,per_add,phone,email,city,gender,zipcode,state,relationship,dob) values ('${data.fname}','${data.lname}','${data.designation}','${data.add1}','${data.add2}','${data.phn}','${data.email}','${data.city}','${data.gender}','${data.zip}','${data.state}','${data.status}','${data.dob}')`;
		let insertBasic2 = `insert into employe_master (fname,lname,designation,curr_add,per_add,phone,email,city,gender,zipcode,state,relationship,dob) values (?)`;
		let insertEduc =
			"insert into education (emp_id,Board_or_University,Passing_year,Percent) values ?";
		let insertWork =
			"insert into work_exp (emp_id,company_name,Designation,From_date,To_date) values (?)";
		let insertTech = "insert into Technology (emp_id,tech_name,level) values ?";
		// let insertLang ="insert into education (emp_id,company_name,Designation,From_date,To_date) values (?)";
		let insertRefe =
			"insert into reference (emp_id,ref_name,ref_contact,ref_relation) values (?)";
		let insertPref =
			"insert into preference (emp_id,pref_location,Department,Expected_ctc,Current_ctc,Notice_period) values (?)";
		if (data) {
			try {
				let result = await conn.query(insertBasic2, [Basic]);
				eid = result[0].insertId;
				console.log("Result:", eid);
			} catch (error) {
				console.log(error);
			}
			try {
				let edu = [
					[eid, data.boardnameSSC, data.passingyearSSC, data.percentageSSC],
					[eid, data.boardnameHSC, data.passingyearHSC, data.percentageHSC],
					[
						eid,
						data.universitynameBACH,
						data.passingyearBACH,
						data.percentageBACH,
					],
					[
						eid,
						data.universitynameMAST,
						data.passingyearMAST,
						data.percentageMAST,
					],
				];
				let work = [
					eid,
					data.company,
					data.workDesignation3,
					data.from,
					data.to,
				];
				let ref = [eid, data.refName, data.refContact, data.refRelation];
				let tech = [
					[eid, data.PHP[0], data.PHP[1]],
					[eid, data.mysql[0], data.mysql[1]],
					[eid, data.laravel[0], data.laravel[1]],
					[eid, data.oracle[0], data.oracle[1]],
				];
				let pref = [
					eid,
					data.location,
					data.department,
					data.expectedctc,
					data.curctc,
					data.notice,
				];
				let insertLang =
					"insert into language (emp_id,lan_name,can_read,can_write,can_speak) values";
				let languages = ["lk_hindi", "lk_english", "lk_gujarati"];
				// console.log((object.fname = "Jay"));
				let AllKey = Object.keys(data);
				languages.forEach((element) => {
					if (AllKey.includes(element)) {
						insertLang += `(${eid},`;
						insertLang += `'${element.split("_")[1]}',`;
						if (AllKey.includes("lk_" + element.split("_")[1][0] + "read")) {
							insertLang += `${1}, `;
						} else {
							insertLang += `${0}, `;
						}
						if (AllKey.includes("lk_" + element.split("_")[1][0] + "write")) {
							insertLang += `${1}, `;
						} else {
							insertLang += `${0}, `;
						}
						if (AllKey.includes("lk_" + element.split("_")[1][0] + "speak")) {
							insertLang += `${1}`;
						} else {
							insertLang += `${0}`;
						}
						insertLang += "),";
					}
				});
				insertLang = insertLang.substring(0, insertLang.length - 1);
				console.log(edu, ref, pref, work, tech);
				await conn.query(insertEduc, [edu]);
				await conn.query(insertWork, [work]);
				await conn.query(insertLang);
				await conn.query(insertTech, [tech]);
				await conn.query(insertRefe, [ref]);
				await conn.query(insertPref, [pref]);
			} catch (error) {
				console.log(error);
			}
			res.send("Ayo");
		}
	}
});
module.exports = route;

// route.post("/process", (req, res) => {
// 	let name = req.body.name;
// 	console.log(name);
// 	res.render("pages/process", { name: name });
// });

// route.post("/data", async (req, res) => {
// 	let data = req.body;
// 	let allValues = [];
// 	const values = Object.values(data);
// 	console.log(values);
// 	allValues.push(values.slice(0, 13));
// 	allValues.push(values.slice(13, 25));
// 	allValues.push(values.slice(25));
// 	// let BasicDetails = values.slice(0, 13);
// 	// let EducationDetails = values.slice(14, 24);
// 	// let prefe = values.slice(25);

// 	console.log("Basic:", allValues);
// 	// console.log("Education:", EducationDetails);
// 	// console.log("Pref:", prefe);
// 	try {
// 		// let row = await insertData(await connection(), BasicDetails, prefe);
// 		// console.log("Last Inserted : ", row);
// 		res.send("Submitted");
// 		// res.render("pages/home", { result: row });
// 	} catch (error) {
// 		console.log("Cannot Insert : Check Mannualyy", error);
// 	}
// });
