const validate = () => {
	let status = true;
	let email = document.getElementById("email").value.trim();
	let password = document.getElementById("password").value.trim();
	let errElem = document.getElementById("passerr");
	console.log(email, password, errElem);

	if ((email === "" && password === "") || password === "" || email === "") {
		errElem.innerHTML = "please fill the information !";
		status = false;
	}
	return status;
};

async function loginUser() {
	let status = validate();
	let token;
	let data = new URLSearchParams(new FormData(document.forms["login"]));

	if (status) {
		console.log("object");
		await fetch("http://127.0.0.1:8000/login", {
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
				status = result.status;
				token = result.token;
				console.log(token);
			});
		if (!status) {
			document.getElementById("err").style.display = "block";
			document.getElementById("err").innerHTML =
				"Your Email & Password do not match! Please try again!";
		} else {
			alert("Welcome");
			document.cookie = `token=${token}; expires=Thu, 31 Mar 2025 11:57:00 `;
			if (document.cookie) {
				window.location.href = "http://127.0.0.1:5500/public/html/home.html";
			}
		}
	}
	if (status == null) {
		document.getElementById("passerr").innerHTML =
			"please fill the information !";
	}

	return status;
}

function register(params) {
	window.location = "http://127.0.0.1:5500/public/html/register.html";
}
