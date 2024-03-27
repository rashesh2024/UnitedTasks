const express = require("express");
const app = express();
const router = require("./router/router");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const connection = require("./config/dbconnect.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: false }));

// Database Connection
app.use("/", router);

app.listen(process.env.PORT, function (err) {
	if (err) throw err;
	console.log("http://127.0.0.1:8888");
});
