const {
	displayDataStudent,
	insertStudentData,
} = require("../models/studentModel");

async function dispData(conn) {
	// Calling Model
	// console.log("object");
	return await displayDataStudent(conn);
}

const insertData = async (conn, basicDetails, preference) => {
	// console.log("Cobntroller:", data);
	return await insertStudentData(conn, basicDetails, preference);
};

const getData = async (conn, eid) => {
	try {
		let resultLang = await conn.query(
			`select * from language where emp_id = ${eid}`
		);
		let resultBasic = await conn.query(
			`SELECT *, preference.pref_location,preference.Department,preference.Expected_ctc,preference.Expected_ctc,preference.Notice_period FROM job_app_db_29.employe_master, job_app_db_29.preference where employe_master.emp_id = preference.emp_id and employe_master.emp_id = ${eid}`
		);
		return { resultBasic, resultLang };
	} catch (error) {
		console.log("Kuch to Gadbad Hai daya", error);
	}
};

const getStates = async (conn) => {
	let sql = "select * from states";
	let states = await conn.query(sql);

	return states[0];
};
const getCities = async (conn, id) => {
	let sql = `select * from cities where state_id = ${id}`;
	let cities = await conn.query(sql);

	return cities[0];
};

module.exports = { dispData, insertData, getData, getStates, getCities };
