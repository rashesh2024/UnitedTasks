//? Dynamic Search
const express = require("express");
const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const route = require("./router/routes");
app.use(bodyParser.urlencoded({ extended: false }));

//! Setting up the view engine
app.set("view engine", "ejs");
// app.use(express.bodyParser());

//! Using Public Folder as Static
app.use(express.static("public"));
app.use("/", route);

app.listen(process.env.PORT, (err) => {
	if (err) throw err;
	console.log(`http://127.0.0.1:8888`);
});
