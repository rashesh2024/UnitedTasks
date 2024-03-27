// alert("sfb");
const headers = { "Content-Type": "application/json" };
var userId = window.location.search.split("=")[1];
console.log(userId);

const getUser = async (id) => {
	let uData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		headers,
	})
		.then((uData) => uData.json())
		.then((data) => {
			return data;
		});

	let uComment = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
		{
			headers,
		}
	)
		.then((uComm) => uComm.json())
		.then((comment) => {
			return comment;
		});

	console.log("This is", uComment);
	let table = document.getElementById("table");
	let commentDiv = document.getElementById("comment");
	//
	let myTable = "";
	let comment = "";
	//
	for (const key in uData) {
		if (key === "image" || key === "thumbnail") {
			myTable += `<tr><th>${key}</th><td><img
			src="${uData[key]}"
			alt="" width="100px" width="100px"
		/></td></tr>`;
		} else {
			myTable += `<tr><th>${key}</th><td>${uData[key]}</td></tr>`;
		}
	}

	uComment.forEach((cmt) => {
		comment += `<p>${cmt.id}</p><p>${cmt.name}</p><p>${cmt.email}</p><p>${cmt.body}</p>`;
	});

	table.innerHTML = `${myTable}`;
	commentDiv.innerHTML = comment;
};

getUser(userId);

function show() {
	var x = document.getElementById("comment");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
