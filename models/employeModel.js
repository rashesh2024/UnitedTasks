const { employeConnection } = require("../.config/dbConnect");

const displayDataEmploye = async () => {
	try {
		var responce = await employeConnection.query(
			"select * from employe_master",
			async (error, result) => {
				if (error) {
					console.log("model: ", error);
					reject(error);
				} else {
					await resolve(result);
				}
			}
		);

		// console.log(await responce);
		return await responce;
	} catch (error) {}
};

const insertEmployeData = async (basicData, preferenceData) => {
	try {
		let record;
		let NewRec;
		if (employeConnection) {
			// console.log("Model:", data);

			// Basic Insert Promise
			let insertBasic = await new Promise((resolve, reject) => {
				// let insSql =
				// 	"insert into employe_master (fname,lname,designation,curr_add,per_add,phone,email,city,gender,zipcode,state,relationship,dob) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
				let insSql =
					"insert into employe_master (fname,lname,designation,curr_add,per_add,phone,email,city,gender,zipcode,state,relationship,dob) values (?)";
				employeConnection.query(insSql, [basicData], (err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result.insertId);
					}
				});
			});

			// Preference Insert Promise
			let insertPreference = await new Promise((resolve, reject) => {
				// let insSql =
				// 	"insert into employe_master (fname,lname,designation,curr_add,per_add,phone,email,city,gender,zipcode,state,relationship,dob) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
				let insSql =
					"insert into preference (emp_id,pref_location,Expected_ctc,Current_ctc,Notice_period) values (?)";
				preferenceData = preferenceData.splice(0, 0, record);
				console.log("New", preferenceData);
				employeConnection.query(insSql, [preferenceData], (err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result.insertId);
					}
				});
			});

			try {
				record = await insertBasic;
				NewRec = await insertPreference;
				console.log(record);
			} catch (error) {
				console.log("E:", err);
			}

			return record, NewRec;
		}
	} catch (error) {
		return error;
	}
};

async function queryExecuter(employeConnection, data, query) {
	try {
		let record;
		if (employeConnection) {
			let insert = await new Promise((resolve, reject) => {
				employeConnection.query(query, [data], (err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result.insertId);
					}
				});
			});

			try {
				record = await insert;
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

module.exports = { displayDataEmploye, insertEmployeData };
