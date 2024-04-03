const { employeConnection } = require("../.config/dbConnect");

const {
	displayDataEmploye,
	insertEmployeData,
} = require("../models/employeModel");

async function dispData() {
	return await displayDataEmploye();
}

const insertData = async (basicDetails, preference) => {
	// console.log("Cobntroller:", data);
	return await insertEmployeData(basicDetails, preference);
};

const getData = async (eid) => {
	try {
		let resultLang = await employeConnection.query(
			`select * from language where emp_id = ${eid}`
		);
		let resultBasic = await employeConnection.query(
			`SELECT *, preference.pref_location,preference.Department,preference.Expected_ctc,preference.Expected_ctc,preference.Notice_period FROM job_app_db_29.employe_master, job_app_db_29.preference where employe_master.emp_id = preference.emp_id and employe_master.emp_id = ${eid}`
		);
		return { resultBasic, resultLang };
	} catch (error) {
		console.log("Kuch to Gadbad Hai daya", error);
	}
};

const getStates = async () => {
	let sql = "select * from states";
	let states = await employeConnection.query(sql);

	return states[0];
};
const getCities = async (id) => {
	let sql = `select * from cities where state_id = ${id}`;
	let cities = await employeConnection.query(sql);

	return cities[0];
};

const insertEmploye = async (req, res) => {
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

			await employeConnection.query(updateBasic);
			await employeConnection.query(updatePref);
			await employeConnection.query(deleteLang);
			await employeConnection.query(insertLang);

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
				let result = await employeConnection.query(insertBasic2, [Basic]);
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
				await employeConnection.query(insertEduc, [edu]);
				await employeConnection.query(insertWork, [work]);
				await employeConnection.query(insertLang);
				await employeConnection.query(insertTech, [tech]);
				await employeConnection.query(insertRefe, [ref]);
				await employeConnection.query(insertPref, [pref]);
			} catch (error) {
				console.log(error);
			}
			res.send("Ayo");
		}
	}
};

module.exports = {
	dispData,
	insertData,
	getData,
	getStates,
	getCities,
	insertEmploye,
};
