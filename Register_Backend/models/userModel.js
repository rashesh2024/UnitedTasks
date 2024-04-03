// const {
// 	studentConnection,
// 	student2Connection,
// 	employeConnection,
// 	userConnection,
// } = require("../.config/dbConnect");

// const insertExecutor = async (sql, data) => {
// 	let output = null;

// 	await new Promise((resolve, reject) => {
// 		userConnection.query(sql, [data], function (err, result) {
// 			resolve(result);
// 		});
// 	}).then((response) => {
// 		output = response.insertId;
// 	});

// 	// console.log(output);

// 	return output;
// };

// const getUser = async (sql) => {
// 	let output = null;

// 	await new Promise((resolve, reject) => {
// 		userConnection.query(sql, function (err, result) {
// 			resolve(result);
// 		});
// 	}).then((response) => {
// 		output = response;
// 	});

// 	// console.log(output);

// 	return output;
// };

// const activeUser = async (sql) => {
// 	let output = null;

// 	await new Promise((resolve, reject) => {
// 		userConnection.query(sql, function (err, result) {
// 			console.log(output);
// 			resolve(result);
// 		});
// 	}).then((response) => {
// 		output = response;
// 	});

// 	// console.log(output);

// 	return output;
// };

// const register = async (data) => {
// 	// console.log("model", data);
// 	let insertUser = `insert into users (fname,lname,user_name,password,saltKey,access_token) values (?)`;
// 	// console.log(insertUser);
// 	let uid = await insertExecutor(insertUser, data);
// 	let selectUser = `select * from users where user_id = ${uid}`;
// 	let user = await getUser(selectUser);
// 	console.log("Added", uid);
// 	return user[0];
// };

// module.exports = { register, getUser, activeUser };
