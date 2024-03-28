const express = require("express");
const mysql = require("mysql");
const app = express();
const route = require("./routes/router");

//! Setting up the view engine
app.set("view engine", "ejs");
// app.use(express.bodyParser());

//! Setting Up Connection Properties
const conn = mysql.createConnection({
	host: "127.0.0.1",
	database: "studentDB_27feb",
	user: "root",
	password: "root",
});

//! Using Public Folder as Static
app.use(express.static("public"));
app.use("/", route);

app.listen(8080);
