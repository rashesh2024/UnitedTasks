function validate(params) {
	var err = true;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const oneWord = /^[A-Za-z]+$/;
	var phnRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
	const zipRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
	const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

	let inputFields = document.querySelectorAll(".require");
	let span = document.querySelectorAll(".requireErr");

	// var firstErrorId = 0;

	const firstName = document.getElementById("fname");
	const lastName = document.getElementById("lname");
	const designation = document.getElementById("designation");
	const address1 = document.getElementById("add1");
	const address2 = document.getElementById("add2");
	const emailField = document.getElementById("email");
	const phnField = document.getElementById("phn");

	const zipField = document.getElementById("zip");
	const dobField = document.getElementById("dob");

	// SSC Elements
	const sscBoard = document.getElementById("boardnameSSC");
	const sscYear = document.getElementById("passingyearSSC");
	const sscPercentage = document.getElementById("percentageSSC");

	//HSC Elements
	const hscBoard = document.getElementById("boardnameHSC");
	const hscYear = document.getElementById("passingyearHSC");
	const hscPercentage = document.getElementById("percentageHSC");

	// Bachelor Elements
	const uniBach = document.getElementById("universitynameBACH");
	const bachYear = document.getElementById("passingyearBACH");
	const bachPercentage = document.getElementById("percentageBACH");

	// Master Elements
	const uniMast = document.getElementById("universitynameMAST");
	const mastYear = document.getElementById("passingyearMAST");
	const mastPercentage = document.getElementById("percentageMAST");

	const refeName = document.getElementById("refName");
	const refeContact = document.getElementById("refContact");
	const refeRelation = document.getElementById("refRelation");

	//
	const fnameInput = firstName.value.trim();
	const lnameInput = lastName.value.trim();
	const desiInput = designation.value.trim();
	const add1Input = address1.value.trim();
	const add2Input = address2.value.trim();
	const emailInput = emailField.value.trim();
	const phnInput = phnField.value.trim();

	const zipInput = zipField.value.trim();
	const dobInput = dobField.value.trim();
	//
	if (!oneWord.test(fnameInput)) {
		err = false;
		firstName.nextElementSibling.innerHTML = "Enter Firstname Only!";
		firstName.focus();
	} //
	if (!oneWord.test(lnameInput)) {
		err = false;
		lastName.nextElementSibling.innerHTML = "Enter Lastname Only!";
		lastName.focus();
	}
	// //
	if (!emailRegex.test(emailInput) && emailInput.length > 0) {
		err = false;
		emailField.nextElementSibling.innerHTML = "Enter Valid Email !!";
		emailField.focus();
	}
	//
	// Phone Number Validation
	//
	if (!phnRegex.test(phnInput) && phnInput.length > 0) {
		err = false;
		phnField.nextElementSibling.innerHTML = "Invalid phonenumber !";
		phnField.focus();
	}
	//
	// City Validation
	//
	// if (!oneWord.test(cityInput) && cityInput.length > 0) {
	// 	err = false;
	// 	cityField.nextElementSibling.innerHTML = "Invalid phonenumber !";
	// 	cityField.focus();
	// }
	//
	// Zip Validation
	//
	if (!zipRegex.test(zipInput) && zipInput.length > 0) {
		err = false;
		zipField.nextElementSibling.innerHTML = "Invalid phonenumber !";
		zipField.focus();
	}
	//
	// date Validation
	//
	if (!dateRegex.test(dobInput) && dobInput.length > 0) {
		err = false;
		dobField.nextElementSibling.innerHTML = "Invalid Birth Date !";
		dobField.focus();
	}

	if (sscBoard.value) {
		if (!sscYear.value) {
			sscYear.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
		if (!sscPercentage.value) {
			sscPercentage.nextElementSibling.innerHTML =
				"Please Enter Passing Year !";
			err = false;
		}
	}

	if (hscBoard.value) {
		if (!hscYear.value) {
			hscYear.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
		if (!hscPercentage.value) {
			hscPercentage.nextElementSibling.innerHTML =
				"Please Enter Passing Year !";
			err = false;
		}
	}

	if (uniBach.value) {
		if (!bachPercentage.value) {
			bachPercentage.nextElementSibling.innerHTML =
				"Please Enter Passing Year !";
			err = false;
		}
		if (!bachYear.value) {
			bachYear.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
	}

	if (uniMast.value) {
		if (!mastPercentage.value) {
			mastPercentage.nextElementSibling.innerHTML =
				"Please Enter Passing Year !";
			err = false;
		}
		if (!mastYear.value) {
			mastYear.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
	}

	if (refeName.value) {
		if (!refeContact.value) {
			refeContact.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
		if (!refeRelation.value) {
			refeRelation.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
	}

	var flag = true;
	for (var i = 0; i < inputFields.length; i++) {
		if (inputFields[i].value.trim() === "") {
			eleId = inputFields[i].getAttribute("id");
			if (flag) {
				document.getElementById(eleId).focus();
				flag = false;
			}
			span[i].innerHTML = "Please fill this!";
			err = false;
		}
	}
	return err;
}
//

function validateBasic(params) {
	var err = true;
	let bscinputFields = document.querySelectorAll(".require");
	let bscspan = document.querySelectorAll(".requireErr");
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const oneWord = /^[A-Za-z]+$/;
	var phnRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
	const zipRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
	const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

	let inputFields = document.querySelectorAll(".require");
	let span = document.querySelectorAll(".requireErr");
	const firstName = document.getElementById("fname");
	const lastName = document.getElementById("lname");
	const designation = document.getElementById("designation");
	const address1 = document.getElementById("add1");
	const address2 = document.getElementById("add2");
	const emailField = document.getElementById("email");
	const phnField = document.getElementById("phn");
	const zipField = document.getElementById("zip");
	const dobField = document.getElementById("dob");

	const fnameInput = firstName.value.trim();
	const lnameInput = lastName.value.trim();
	const emailInput = emailField.value.trim();
	const phnInput = phnField.value.trim();

	const zipInput = zipField.value.trim();
	const dobInput = dobField.value.trim();
	//
	if (!oneWord.test(fnameInput)) {
		err = false;
		firstName.nextElementSibling.innerHTML = "Enter Firstname Only!";
		firstName.focus();
	} //
	if (!oneWord.test(lnameInput)) {
		err = false;
		lastName.nextElementSibling.innerHTML = "Enter Lastname Only!";
		lastName.focus();
	}
	if (!emailRegex.test(emailInput) && emailInput.length > 0) {
		err = false;
		emailField.nextElementSibling.innerHTML = "Enter Valid Email !!";
		emailField.focus();
	}
	//
	// Phone Number Validation
	//
	if (!phnRegex.test(phnInput) && phnInput.length > 0) {
		err = false;
		phnField.nextElementSibling.innerHTML = "Invalid phonenumber !";
		phnField.focus();
	}

	// Zip Validation
	//
	if (!zipRegex.test(zipInput) && zipInput.length > 0) {
		err = false;
		zipField.nextElementSibling.innerHTML = "Invalid phonenumber !";
		zipField.focus();
	}
	//
	// date Validation
	//
	if (!dateRegex.test(dobInput) && dobInput.length > 0) {
		err = false;
		dobField.nextElementSibling.innerHTML = "Invalid Birth Date !";
		dobField.focus();
	}

	var flag = true;
	for (var i = 0; i < bscinputFields.length; i++) {
		if (bscinputFields[i].value.trim() === "") {
			eleId = bscinputFields[i].getAttribute("id");
			if (flag) {
				document.getElementById(eleId).focus();
				flag = false;
			}
			bscspan[i].innerHTML = "Please fill this!";
			err = false;
		}
	}

	return err;
}

function validateEdu(params) {
	let err = true;
	const sscBoard = document.getElementById("boardnameSSC");
	const sscYear = document.getElementById("passingyearSSC");
	const sscPercentage = document.getElementById("percentageSSC");

	//HSC Elements
	const hscBoard = document.getElementById("boardnameHSC");
	const hscYear = document.getElementById("passingyearHSC");
	const hscPercentage = document.getElementById("percentageHSC");

	// Bachelor Elements
	const uniBach = document.getElementById("universitynameBACH");
	const bachYear = document.getElementById("passingyearBACH");
	const bachPercentage = document.getElementById("percentageBACH");

	// Master Elements
	const uniMast = document.getElementById("universitynameMAST");
	const mastYear = document.getElementById("passingyearMAST");
	const mastPercentage = document.getElementById("percentageMAST");

	const refeName = document.getElementById("refName");
	const refeContact = document.getElementById("refContact");
	const refeRelation = document.getElementById("refRelation");

	if (sscBoard.value) {
		if (!sscYear.value) {
			sscYear.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
		if (!sscPercentage.value) {
			sscPercentage.nextElementSibling.innerHTML =
				"Please Enter Passing Year !";
			err = false;
		}
	}

	if (hscBoard.value) {
		if (!hscYear.value) {
			hscYear.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
		if (!hscPercentage.value) {
			hscPercentage.nextElementSibling.innerHTML =
				"Please Enter Passing Year !";
			err = false;
		}
	}

	if (uniBach.value) {
		if (!bachPercentage.value) {
			bachPercentage.nextElementSibling.innerHTML =
				"Please Enter Passing Year !";
			err = false;
		}
		if (!bachYear.value) {
			bachYear.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
	}

	if (uniMast.value) {
		if (!mastPercentage.value) {
			mastPercentage.nextElementSibling.innerHTML =
				"Please Enter Passing Year !";
			err = false;
		}
		if (!mastYear.value) {
			mastYear.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
	}

	if (refeName.value) {
		if (!refeContact.value) {
			refeContact.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
		if (!refeRelation.value) {
			refeRelation.nextElementSibling.innerHTML = "Please Enter Passing Year !";
			err = false;
		}
	}
	return err;
}

function validatePreference(params) {
	var err = true;
	let prefinputFields = document.querySelectorAll(".requireD");
	let prefspan = document.querySelectorAll(".requireE");

	var flag = true;
	for (var i = 0; i < prefinputFields.length; i++) {
		if (prefinputFields[i].value.trim() === "") {
			eleId = prefinputFields[i].getAttribute("id");
			if (flag) {
				document.getElementById(eleId).focus();
				flag = false;
			}
			prefspan[i].innerHTML = "Please fill this!";
			err = false;
		}
	}
	return err;
}

function remove(params) {
	var nxtSpan = params.nextElementSibling;
	if (nxtSpan.innerHTML.length > 0) {
		nxtSpan.innerHTML = "";
	}
}

// Collecting States

var myData;

(async function getAllStates(params) {
	let states;
	var stateElem = document.getElementById("state");

	let stateStr = "";
	await fetch("http://127.0.0.1:8000/state", { method: "GET" })
		.then((response) => {
			return response.json();
		})
		.then((resp) => {
			states = resp;
		});

	states.forEach((state) => {
		// if (state.id == myData.state) {
		// 	stateStr += `<option value="${state.id}" selected>${state.name}</option>`;
		// } else {
		stateStr += `<option value="${state.id}">${state.name}</option>`;
		// }
	});
	stateElem.innerHTML = stateStr;
})();

// Collection Cities
async function getCity(params) {
	let cities;
	var stateID = document.getElementById("state").value;
	var cityEle = document.getElementById("city");

	let cityStr = "";
	await fetch("/city?" + new URLSearchParams({ id: stateID }).toString(), {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.then((resp) => {
			cities = resp;
		});

	cities.forEach((city) => {
		cityStr += `<option value="${city.id}">${city.city}</option>`;
	});
	cityEle.innerHTML = cityStr;
}

function next(id) {
	let validBsc = validateBasic();
	let validEdu = validateEdu();

	if (validBsc === false || validEdu === false) {
		return validBsc || validEdu;
	} else {
		if (id > 1) {
			document.getElementById(`section${id - 1}`).style.display = "none";
			document.getElementById(`section${id}`).style.display = "block";
			document.getElementById(`section${id + 1}`).style.display = "none";
		} else {
			document.getElementById(`section${id + 1}`).style.display = "none";
			document.getElementById(`section${id}`).style.display = "block";
		}
	}
}

async function submitForm(params) {
	let validPref = validatePreference();

	if (validPref === false) {
		return validPref;
	} else {
		let url = window.location.href;
		var id;
		if (url.includes("?")) {
			id = url.split("?")[1];
			console.log(id);
		}
		console.log(id);
		console.log(url);

		if (id) {
			alert("Updated");
			const resp = await fetch(
				"/data?" +
					new URLSearchParams({
						id: id,
					}).toString(),
				{
					method: "POST",
					body: new URLSearchParams(
						new FormData(document.forms["Job Application Form"])
					),
				}
			);
			console.log(resp);
		} else {
			alert("Submitted");
			const resp = await fetch("/data", {
				method: "POST",
				body: new URLSearchParams(
					new FormData(document.forms["Job Application Form"])
				),
			});
			console.log(resp);
		}
	}
}

(async function getID(params) {
	let url = window.location.href;
	let id = url.split("?")[1];
	console.log(`This is Id ${id}`);

	await fetch(`/urlGet?${id}`, { method: "GET" })
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			myData = data;
		});
	console.log(myData);
	document.getElementById("fname").value = myData.Basic.fname;
	document.getElementById("lname").value = myData.Basic.lname;
	document.getElementById("designation").value = myData.Basic.designation;
	document.getElementById("email").value = myData.Basic.email;
	document.getElementById("phn").value = myData.Basic.phone;
	document.getElementById("add1").innerHTML = myData.Basic.curr_add;
	document.getElementById("add2").innerHTML = myData.Basic.per_add;
	document.getElementById("dob").value = myData.Basic.dob;
	document.getElementById("city").value = myData.Basic.city;
	document.getElementById("state").value = myData.Basic.state;
	document.getElementById("status").value = myData.Basic.relationship;
	document.getElementById("zip").value = myData.Basic.zipcode;
	// document.getElementById("add2").innerHTML = myData.Basic.per_add;
	if (myData.Basic.gender === "Male") {
		document.getElementById("Male").checked = true;
	}
	if (myData.Basic.gender === "Female") {
		document.getElementById("Male").checked = true;
	}
})();
