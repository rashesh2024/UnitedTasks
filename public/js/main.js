var emailField = document.getElementById("email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");

var inptus = document.querySelectorAll(".require");
var pinptus = document.querySelectorAll(".requirep");
var span = document.querySelectorAll(".reqErr");
var spanp = document.querySelectorAll(".reqErrp");

async function validateBasic() {
	let err = true;

	for (let i = 0; i < inptus.length; i++) {
		const field = inptus[i];
		if (field.value.trim().length == "") {
			span[i].innerHTML = "please enter information";
			err = false;
		}
	}

	let checkEmail = await validateEmail(emailField.value);

	if (!checkEmail) {
		err = false;
		emailField.nextElementSibling.innerHTML = "This email already exists";
	}

	return err;
}

function validatePSW() {
	let err = true;

	for (let i = 0; i < pinptus.length; i++) {
		const field = pinptus[i];
		if (field.value.trim().length == "") {
			spanp[i].innerHTML = "please enter information";
			err = false;
		}
	}

	if (password1.value.trim() !== password2.value.trim()) {
		password2.nextElementSibling.innerHTML = "Password not matching";
		err = false;
	}

	return err;
}

function remove(params) {
	var nxtSpan = params.nextElementSibling;
	if (nxtSpan.innerHTML.length > 0) {
		nxtSpan.innerHTML = "";
	}
}

async function next(sec) {
	let validBSC = await validateBasic();
	//
	if (!validBSC) {
		console.log("B", validBSC);
		return;
	} else {
		//
		if (sec === 1) {
			document.getElementById(`section${sec}`).style.display = "block";
			document.getElementById(`section${sec + 1}`).style.display = "none";
		} else {
			console.log(document.getElementById(`section${sec}`));
			document.getElementById(`section${sec}`).style.display = "block";
			document.getElementById(`section${sec - 1}`).style.display = "none";
		}
	}
}

function getValue() {
	let userData;
	let validPSW = validatePSW();
	if (!validPSW) {
		console.log("P", validPSW);
		return;
	} else {
		userData = fetchData();
		if (userData) {
			document.forms["Registration"].reset();
		}
	}
}

async function fetchData() {
	var data = new URLSearchParams(new FormData(document.forms["Registration"]));
	// var data = new FormData(document.forms["Registration"]);
	let response;
	await fetch("http://192.168.22.89:8000/register", {
		method: "POST",
		mode: "cors",
		body: data,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	})
		.then((resp) => {
			return resp.json();
		})
		.then((result) => {
			response = result;
		});
	await generateLink(response);

	return response;
}

const generateLink = async (uData) => {
	let link = document.getElementById("link");
	link.innerHTML = `Click Here`;
	link.setAttribute(
		"href",
		"http://192.168.22.89:5500/public/html/verified.html"
	);

	link.setAttribute(
		"onclick",
		`matchCredentials(${uData.user_id},"${uData.access_token}")`
	);

	link.setAttribute("target", "_blank");
};

async function matchCredentials(userId, token) {
	let userInfo = { user_id: userId, access_token: token };
	// console.log(userInfo);
	await fetch("http://192.168.22.89:8000/matchCreds", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(userInfo),
	}).then((response) => {
		// console.log(response);
	});
}

const validateEmail = async (email) => {
	let status = true;

	let emailObj = { email: email };
	console.log(emailObj);
	await fetch("http://192.168.22.89:8000/verifyEmail", {
		mode: "cors",
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(emailObj),
	})
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			status = result.msg;
			console.log(status);
		});

	return status;
};
