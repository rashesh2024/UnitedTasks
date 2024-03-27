// import validator from "validator";

//
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
	const cityField = document.getElementById("city");
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
	const cityInput = cityField.value.trim();
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
	if (!oneWord.test(cityInput) && cityInput.length > 0) {
		err = false;
		cityField.nextElementSibling.innerHTML = "Invalid phonenumber !";
		cityField.focus();
	}
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

function remove(params) {
	var nxtSpan = params.nextElementSibling;
	if (nxtSpan.innerHTML.length > 0) {
		nxtSpan.innerHTML = "";
	}
}

// inputFields.forEach((field) => {
// 	span.forEach((span, i = 0) => {
// 		if (field.value.trim() === "") {
// 			if (i === 0) {
// 				console.log(i);
// 				console.log(field.getAttribute("id"));
// 				// eleId = field.getAttribute("id");
// 				// document.getElementById(eleId).focus();
// 			}
// 			span.innerHTML = "Please fill this!";
// 			console.log("down if");
// 			// eleId = field.getAttribute("id");
// 			err = false;
// 		}
// 	});
// });
