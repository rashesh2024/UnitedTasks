const headers = { "Content-Type": "application/json" };
var userId = window.location.search.split("=")[1];
var page = document.getElementById("page").innerHTML;
let currpage = 1 || currpage;
var response;

let allData;
let myPosts;
let PAGE_LIMIT = 10;

// async function fetchData(params) {
// 	return fetch("https://jsonplaceholder.typicode.com/posts", {
// 		// return fetch("https://jsonplaceholder.typicode.com/posts", {
// 		headers,
// 	})
// 		.then((data) => data.json())
// 		.then((json) => {
// 			return json;
// 		});
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {]

async function load() {
	// await fetch("https://jsonplaceholder.org/posts", {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		headers: {
			"Content-Type": "application/json",
			// "Access-Control-Allow-Origin": "*",
		},
	})
		.then((data) => {
			return data.json();
		})
		.then((resp) => {
			allData = resp;
			console.log("Empty ?", allData);
			getResponse();
		});
}

function getResponse() {
	if (allData) {
		// allData = await response;
		console.log("All Data : ", allData);
		getData();
	}
	// return allData;
}

function getData(start, end) {
	//

	myPosts = allData;
	// console.log("Table all ", allData);
	// console.log("Table post", myPosts);
	// allData = await fetchData();
	let table = document.getElementById("table");
	let bodyStr = "";
	let headingStr = "";
	// console.log(myPosts);

	console.log("New Slice", myPosts.slice((currpage - 1) * 10, 10));
	if (start == null && end == null) {
		myPosts = myPosts.slice((currpage - 1) * 10, 10);
	} else {
		table.innerHTML = "";
		myPosts = myPosts.slice(start, end);
	}

	// let tr = document.createElement("tr");
	// console.log(await myPosts.length);
	// let th = document.createElement("th");
	// let td = document.createElement("td");
	// let row = table.appendChild(tr);
	//

	//
	table.innerHTML = "<tr>";

	let Keys = Object.keys(myPosts[0]);
	Keys.forEach((key) => {
		headingStr += `<th>${key}</th>`;
		// console.log(
	});
	headingStr += "</tr>";
	table.innerHTML += headingStr;

	myPosts.forEach((object) => {
		bodyStr += `<tr onclick="viewMore(${object.id})">`;
		for (const key in object) {
			if (key == "image" || key == "thumbnail") {
				// assigning value
				const value = object[key];
				// Appending String
				bodyStr += `<td><img src="${value}" height="100" width="100"></td>`;
			} else {
				if (key == "content") {
					// assigning value
					const value = object[key].substring(0, 50) + "...";
					// Appending String
					bodyStr += `<td>${value}</td>`;
				} else {
					// assigning value
					const value = object[key];
					// Appending String
					bodyStr += `<td>${value}</td>`;
				}
			}
		}
		bodyStr += `</tr>`;
	});

	table.innerHTML += bodyStr;

	// myPosts.forEach((obj) => {
	// 	tr = document.createElement("tr");
	// 	tr.setAttribute("onClick", `viewMore(${obj.id})`);
	// 	row = table.appendChild(tr);
	// 	//
	// 	for (const key in obj) {
	// 		if (key == "image" || key == "thumbnail") {
	// 			let td = document.createElement("td");
	// 			let data = row.appendChild(td);
	// 			let imgTag = document.createElement("img");
	// 			imgTag.setAttribute("src", `${obj[key]}`);
	// 			imgTag.setAttribute("height", "100px");
	// 			imgTag.setAttribute("width", "100px");

	// 			data.appendChild(imgTag);
	// 		} else {
	// 			if (key == "content" || key == "title") {
	// 				let string = obj[key];
	// 				td = document.createElement("td");
	// 				data = row.appendChild(td);
	// 				data.innerHTML = `${string.substring(0, 30)}`;
	// 			} else {
	// 				td = document.createElement("td");
	// 				data = row.appendChild(td);
	// 				data.innerHTML = `${obj[key]}`;
	// 			}
	// 			// console.log(`${key} has value `);
	// 		}
	// 	}
	// });
	return myPosts;
}

const viewMore = async (id) => {
	//
	location.href = `http://127.0.0.1:5500/Fetch%20_API/public/html/moreDetails.html?id=${id}`;
	getUser(id);
};

// getData();

// console.log(page);
let recPerPage;

function increase(params) {
	if (currpage == 10) {
		currpage = 10;
		page.innerHTML = currpage;
		recPerPage = (currpage - 1) * 10;
		console.log(recPerPage);
		getData(recPerPage, recPerPage + 10);
	} else {
		currpage++;
		document.getElementById("page").innerHTML = currpage;
		recPerPage = (currpage - 1) * 10;
		console.log(recPerPage);
		getData(recPerPage, recPerPage + 10);
	}
}

function decrease(params) {
	if (currpage == 1) {
		currpage = 1;
		page.innerHTML = currpage;
		recPerPage = (currpage - 1) * 10;
		console.log(recPerPage);
		getData(recPerPage, recPerPage + 10);
	} else {
		currpage--;
		document.getElementById("page").innerHTML = currpage;
		recPerPage = (currpage - 1) * 10;
		console.log(recPerPage);
		getData(recPerPage, recPerPage + 10);
	}
}

function max(params) {
	currpage = 10;
	document.getElementById("page").innerHTML = currpage;
	recPerPage = (currpage - 1) * 10;
	getData(recPerPage, recPerPage + 10);
}
function min(params) {
	currpage = 1;
	document.getElementById("page").innerHTML = currpage;
	recPerPage = (currpage - 1) * 10;
	getData(recPerPage, recPerPage + 10);
}

const search = () => {
	let searchVal = document.getElementById("search").value;
	let table = document.getElementById("table");
	let pagination = document.getElementById("pagination");
	let headingStr = "";
	let bodyStr = "";

	console.log(allData);
	console.log(searchVal);
	myPosts = allData.filter((data) => data.title.includes(searchVal));
	console.log(allData);
	// console.log(myPosts);

	//
	table.innerHTML = "";
	if (!searchVal) {
		getData();
	} else {
		pagination.innerHTML = "";

		table.innerHTML = "<tr>";

		let Keys = Object.keys(myPosts[0]);
		Keys.forEach((key) => {
			headingStr += `<th>${key}</th>`;
			// console.log(
		});
		headingStr += "</tr>";
		table.innerHTML += headingStr;

		myPosts.forEach((object) => {
			bodyStr += `<tr onclick="viewMore(${object.id})">`;
			for (const key in object) {
				if (key == "image" || key == "thumbnail") {
					// assigning value
					const value = object[key];
					// Appending String
					bodyStr += `<td><img src="${value}" height="100" width="100"></td>`;
				} else {
					if (key == "content") {
						// assigning value
						const value = object[key].substring(0, 50) + "...";
						// Appending String
						bodyStr += `<td>${value}</td>`;
					} else {
						// assigning value
						const value = object[key];
						// Appending String
						bodyStr += `<td>${value}</td>`;
					}
				}
			}
			bodyStr += `</tr>`;
		});
		myPosts.forEach((object) => {
			bodyStr += `<tr onclick="viewMore(${object.id})">`;
			for (const key in object) {
				if (key == "image" || key == "thumbnail") {
					// assigning value
					const value = object[key];
					// Appending String
					bodyStr += `<td><img src="${value}" height="100" width="100"></td>`;
				} else {
					if (key == "content") {
						// assigning value
						const value = object[key].substring(0, 50) + "...";
						// Appending String
						bodyStr += `<td>${value}</td>`;
					} else {
						// assigning value
						const value = object[key];
						// Appending String
						bodyStr += `<td>${value}</td>`;
					}
				}
			}
			bodyStr += `</tr>`;
		});

		table.innerHTML += bodyStr;
	}
};
