const express = require("express");
const mysql = require("mysql");
const route = require("./routes/router");
const app = express();

//! Setting up the view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//! Using Public Folder as Static
app.use(express.static("public"));

app.use("/", route);

//! Connection to the database

app.listen(8080);
