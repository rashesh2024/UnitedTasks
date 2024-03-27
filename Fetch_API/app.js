const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const router = require("./router/router");
app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.listen(process.env.PORT, () => {
	try {
		console.log("http://127.0.0.1:8000");
	} catch (error) {
		console.log(error);
	}
});
