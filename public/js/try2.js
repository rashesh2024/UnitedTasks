const { query } = require("express");

let object = {
	fname: "Raj",
	lname: "patel",
	designation: "Designer",
	add1: "asfjhahug",
	add2: "ibgzsdfvliabsdliv",
	phn: "+91 8527410000",
	email: "rashesh@gmail.com",
	city: "Vadodara",
	gender: "Male",
	zip: "390006",
	state: "Maharashtra",
	status: "Unmarried",
	dob: "2002-08-14",
	boardnameSSC: "CBSC",
	passingyearSSC: "2016",
	percentageSSC: "75.54",
	boardnameHSC: "CBSC",
	passingyearHSC: "2018",
	percentageHSC: "75.56",
	universitynameBACH: "MSU",
	passingyearBACH: "2022",
	percentageBACH: "75.45",
	universitynameMAST: "DDU",
	passingyearMAST: "2024",
	percentageMAST: "78.56",
	company: "eSparkbiz",
	workDesignation3: "Designer",
	from: "2002-01-01",
	to: "2005-01-01",
	lk_hindi: "YEs",
	lk_hread: "asd",
	lk_english: "on",
	lk_eread: "yes",
	lk_ewrite: "yes",
	lk_gujarati: "yes",
	lk_gread: "yes",
	lk_gspeak: "yes",
	hidden: "hidden",
	PHP: "Beginner",
	myinsertLang: "Beginner",
	laravel: "Beginner",
	oracle: "oracle",
	refName: "Patel",
	refContact: "CTO",
	refRelation: "CTO",
	name: "",
	contact: "",
	relation: "",
	location: "Ahmedabad",
	department: "Development",
	expectedctc: "7,50,000",
	curctc: "4,50,000",
	notice: "1",
};

var lastIndex = Object.keys(object).findIndex((val) => {
	return val.includes("hidden");
});
var index = Object.keys(object).findIndex((val) => {
	return val.includes("lk");
});

// console.log(index, lastIndex);
// console.log(
// 	Object.keys(object).slice(
// 		,
// 		Object.keys(object).findIndex((val) => {
// 			return val.includes("workDesignation3");
// 		})
// 	)
// );
// console.log(Object.keys(object).slice(index, lastIndex));

console.log(insertLang);

// if (AllKey.includes(element) && element == "lk_hindi") {
// 	if (AllKey.includes("lk_hread")) {
// 		object.lk_hread = "Yes";
// 	} else {
// 		object.lk_hread = "No";
// 	}
// 	if (AllKey.includes("lk_hspeak")) {
// 		object.lk_hspeak = "Yes";
// 	} else {
// 		object.lk_hspeak = "No";
// 	}
// 	if (AllKey.includes("lk_hwrite")) {
// 		object.lk_hwrite = "Yes";
// 	} else {
// 		object.lk_hwrite = "No";
// 	}
// } else {
// 	object.lk_Hindi = "Hindi";
// 	object.lk_hwrite = "No";
// 	object.lk_hspeak = "No";
// 	object.lk_hread = "No";
// }
// if (AllKey.includes(element) && element == "lk_english") {
// 	if (AllKey.includes("lk_eread")) {
// 		object.lk_eread = "Yes";
// 	} else {
// 		object.lk_eread = "No";
// 	}
// 	if (AllKey.includes("lk_espeak")) {
// 		object.lk_espeak = "Yes";
// 	} else {
// 		object.lk_espeak = "No";
// 	}
// 	if (AllKey.includes("lk_ewrite")) {
// 		object.lk_ewrite = "Yes";
// 	} else {
// 		object.lk_ewrite = "No";
// 	}
// } else {
// 	object.lk_english = "English";
// 	object.lk_ewrite = "No";
// 	object.lk_espeak = "No";
// 	object.lk_eread = "No";
// }
// if (AllKey.includes(element) && element == "lk_gujarati") {
// 	if (AllKey.includes("lk_gread")) {
// 		object.lk_gread = "Yes";
// 	} else {
// 		object.lk_gread = "No";
// 	}
// 	if (AllKey.includes("lk_gspeak")) {
// 		object.lk_gspeak = "Yes";
// 	} else {
// 		object.lk_gspeak = "No";
// 	}
// 	if (AllKey.includes("lk_gwrite")) {
// 		object.lk_gwrite = "Yes";
// 	} else {
// 		object.lk_gwrite = "No";
// 	}
// } else {
// 	object.lk_gujarati = "Gujarati";
// 	object.lk_gwrite = "No";
// 	object.lk_gspeak = "No";
// 	object.lk_gread = "No";
// }

// for (const key in object) {
// 	console.log(key, "=", object[key]);
// }
