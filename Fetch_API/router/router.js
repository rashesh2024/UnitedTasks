const app = require("express");
const route = app.Router();
const path = require("path");
const fetchData = require("../controllers/fetchController");
const htmlDir = path.join(__dirname, "../public/html/");

route.get("/", (req, res) => {
	res.sendFile(htmlDir + "table.html");
});
route.get("moreDetails/", (req, res) => {
	res.sendFile(htmlDir + "moreDetails.html");
});

// route.get;

module.exports = route;
