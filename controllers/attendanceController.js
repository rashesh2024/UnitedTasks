const { student2Connection } = require("../.config/dbConnect");

var month = "1";
var stdID, len;
var myData = [];
var prelimsData = [];
var terminalData = [];
var finalData = [];

const getStudentData = (req, res) => {
	//SQl query to retrive the attendance record
	let page = req.query.page || 1;

	if (req.query.month) {
		month = req.query.month;
	}
	let sqllen = "SELECT count(*) as length from student_master;";
	//? Execution
	student2Connection.query(sqllen, function (err, result) {
		len = result[0].length;
	});

	var sql =
		"select student_master.std_id, student_master.firstname, student_master.lastname,sum(attendance.is_atended) as days from student_master inner join attendance on student_master.std_id = attendance.std_id and month(attendance.atd_date) =" +
		month +
		" group by student_master.std_id Limit " +
		(page - 1) * 20 +
		",20";

	//Processing The query
	student2Connection.query(sql, function (err1, result) {
		if (err1) {
			console.log(err1);
		}

		myData = result;
		for (let i = 0; i < result.length; i++) {
			if (month == "1" || month == "3") {
				myData[i].totalDay = 31;
				myData[i].percentage =
					parseFloat(((result[i].days * 100) / 31).toFixed(2)) + "%";
			}
			if (month == "2") {
				myData[i].totalDay = 29;
				myData[i].percentage =
					parseFloat(((result[i].days * 100) / 29).toFixed(2)) + "%";
			}
		}

		res.render("pages/students/user_data", {
			data: myData,
			month: month,
			length: len,
			currentPage: page,
		});
	});
};

const getStudentResult = (req, res) => {
	var sql1 =
		"select result.std_id, CONCAT(student_master.firstname, ' ', student_master.lastname) AS Fullname, sum(result.theoryMarks) as Theory,  sum(result.practicalMarks) as Practicle ,exam_master.exam_type from student_master join result join exam_master where student_master.std_id = result.std_id and result.exam_id = exam_master.exam_id  and result.exam_id = 101 group by result.std_id ;";
	var sql2 =
		"select result.std_id, CONCAT(student_master.firstname, ' ', student_master.lastname) AS Fullname, sum(result.theoryMarks) as Theory,  sum(result.practicalMarks) as Practicle ,exam_master.exam_type from student_master join result join exam_master where student_master.std_id = result.std_id and result.exam_id = exam_master.exam_id  and result.exam_id = 102 group by result.std_id;";
	var sql3 =
		"select result.std_id, CONCAT(student_master.firstname, ' ', student_master.lastname) AS Fullname, sum(result.theoryMarks) as Theory,  sum(result.practicalMarks) as Practicle ,exam_master.exam_type from student_master join result join exam_master where student_master.std_id = result.std_id and result.exam_id = exam_master.exam_id  and result.exam_id = 103 group by result.std_id;";

	student2Connection.query(sql1, function (err, terminal) {
		if (err) {
			console.log(err);
		}
		terminalData = terminal;
		student2Connection.query(sql2, function (err, prelims) {
			prelimsData = prelims;
			student2Connection.query(sql3, function (err, final) {
				if (err) {
					res.render("pages/error", { error: err, errNo: err.errno });
				} else {
					finalData = final;
					//

					for (let i = 0; i < terminalData.length; i++) {
						terminalData[i].total =
							terminal[i].Theory +
							terminal[i].Practicle +
							prelims[i].Theory +
							prelims[i].Practicle +
							final[i].Theory +
							final[i].Practicle;
					}
					res.render("pages/students/result", {
						Terminal: terminalData,
						Prelims: prelimsData,
						Final: finalData,
					});
				}
			});
		});
	});
};

const getStudentMarksheet = (req, res) => {
	stdID = req.query.stdid;

	var sql1 =
		"SELECT student_master.std_id, CONCAT(student_master.firstname, ' ', student_master.lastname) AS fullname, subject_master.sub_name, exam_master.exam_type,result.theoryMarks as Theory, result.practicalMarks as Practical FROM student_master LEFT JOIN result ON result.std_id = student_master.std_id LEFT JOIN subject_master on result.sub_id = subject_master.sub_id LEFT JOIN exam_master on exam_master.exam_id = result.exam_id where exam_master.exam_id = 101 and result.std_id =" +
		stdID +
		";";
	var sql2 =
		"SELECT student_master.std_id, CONCAT(student_master.firstname, ' ', student_master.lastname) AS fullname, subject_master.sub_name, exam_master.exam_type,result.theoryMarks as Theory, result.practicalMarks as Practical FROM student_master LEFT JOIN result ON result.std_id = student_master.std_id LEFT JOIN subject_master on result.sub_id = subject_master.sub_id LEFT JOIN exam_master on exam_master.exam_id = result.exam_id where exam_master.exam_id = 102 and result.std_id =" +
		stdID +
		";";
	var sql3 =
		"SELECT student_master.std_id, CONCAT(student_master.firstname, ' ', student_master.lastname) AS fullname, subject_master.sub_name, exam_master.exam_type,result.theoryMarks as Theory, result.practicalMarks as Practical FROM student_master LEFT JOIN result ON result.std_id = student_master.std_id LEFT JOIN subject_master on result.sub_id = subject_master.sub_id LEFT JOIN exam_master on exam_master.exam_id = result.exam_id where exam_master.exam_id = 103 and result.std_id =" +
		stdID +
		";";

	var sql4 =
		"select student_master.std_id ,sum(attendance.is_atended) as days from student_master inner join attendance on student_master.std_id = attendance.std_id and student_master.std_id =" +
		stdID +
		";";

	student2Connection.query(sql1, function (err, result1) {
		if (err) throw err;

		student2Connection.query(sql2, function (err, result2) {
			if (err) throw err;

			student2Connection.query(sql3, function (err, result3) {
				if (err) throw err;

				student2Connection.query(sql4, function (err, attendance) {
					if (err) throw err;

					for (let i = 0; i < result3.length; i++) {
						result3[i].total =
							result1[i].Theory +
							result1[i].Practical +
							result2[i].Theory +
							result2[i].Practical +
							result3[i].Theory +
							result3[i].Practical;

						result3[i].grandTotal =
							result3[i].total +
							result3[i].total +
							result3[i].total +
							result3[i].total +
							result3[i].total +
							result3[i].total;
						//
					}

					attendance[0].days =
						parseFloat(((attendance[0].days * 100) / 91).toFixed(2)) + "%";

					result3[0].percentage =
						parseFloat(((result3[0].grandTotal * 100) / 1200).toFixed(2)) + "%";

					//
					res.render("pages/students/marksheet", {
						Terminal: terminalData,
						myData: myData,
						terminal: result1,
						prelims: result2,
						final: result3,
						attendance: attendance,
					});
				});
			});
		});
	});
};

module.exports = { getStudentData, getStudentResult, getStudentMarksheet };
