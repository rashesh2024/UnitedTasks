async function auth() {
	let msg;
	await fetch("http://192.168.22.89:8080/profile", {
		method: "POST",
		mode: "cors",
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((message) => {
			console.log("Aieen", message);
			// msg = message.message;
		});

	// document.getElementById("auth").innerHTML = msg;
}
