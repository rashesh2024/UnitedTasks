const express = require("express");
const route = express.Router();
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const {
	registerUser,
	verify,
	verifyMail,
	login,
	chekcLogin,
} = require("../controllers/userController");

const { insertEmploye } = require("../controllers/employeController");

const {
	getStudentData,
	getStudentResult,
	getStudentMarksheet,
} = require("../controllers/attendanceController");

const studentData = require("../controllers/studentController");

const {
	postGetInfo,
	getGetInfo,
} = require("../controllers/dynamicDataController");

const { filterGet, filterPost } = require("../controllers/delimeterController");

route.use(cookieParser());

route.get("/", (req, res) => {
	res.send("Running Too!");
});
route.post("/register", registerUser);
route.post("/matchCreds", verify);
route.post("/verifyEmail", verifyMail);
route.post("/login", login);
route.post("/profile", chekcLogin);

//Job Application routes

route.post("/insertData", insertEmploye);

// Attendance Routes
route.get("/uData", getStudentData);
route.get("/result", getStudentResult);
route.get("/marksheet", getStudentMarksheet);

// student records
route.get("/studentData", studentData);

//dynamic records
route.post("/getinfo", postGetInfo);
route.get("/getinfo", getGetInfo);

//Delimeter search

route.get("/filter", filterGet);
route.post("/filter", filterPost);

module.exports = route;
