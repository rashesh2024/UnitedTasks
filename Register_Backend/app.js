const express = require("express");
const route = require("./router/routes");
var authRouter = require("./router/auth");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(cors());
app.use("/", route);
app.use("/", authRouter);

app.listen(process.env.PORT, () => {
	console.log("http://127.0.0.1:8080");
});
