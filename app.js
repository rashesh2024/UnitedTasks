const express = require("express");
const route = require("./router/routes");
const registrationRoute = require("./Register_Backend/router/routes");
const jobform = require("./Job_MVC/router/router");
const studentRec = require("./studentRecords/router/routes");
const attendResult = require("./Attendance_27Feb/routes/router");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cors());
app.use("/", route);
app.use("/", jobform);
app.use("/", studentRec);
app.use("/", attendResult);

app.listen(process.env.PORT, () => {
	console.log("http://127.0.0.1:8000");
});
