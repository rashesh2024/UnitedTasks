var colCount = 0;
var maxColCount = 7;
var rowCount = 0;
var maxRowCount = 7;
var score = 0;

function start() {
	var sec = 10;
	setInterval(() => {
		sec -= 1;
		document.getElementById("time").innerHTML = "Timer : " + sec;
		if (sec <= 0) {
			alert("OPS");
		}
	}, 1000);
}

function randomColors() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function rndColor(params) {
	let color = randomColors();
	let opacity = 0.7;
	let table = document.getElementById("master");
	let td = document.querySelectorAll("td");
	td.forEach((cell) => {
		cell.style.opacity = "1";
		cell.style.backgroundColor = color;
		cell.setAttribute("onclick", "colors()");
	});

	let rand = Math.floor(Math.random() * td.length);
	td[rand].setAttribute("class", "diff");
	td[rand].style.opacity = opacity;
	td[rand].setAttribute("onclick", "increase()");
}

function increase(params) {
	if (colCount < maxColCount && rowCount < maxRowCount) {
		let table = document.getElementById("master");
		document.querySelectorAll("tr").forEach((row) => {
			let cell = document.createElement("td");
			// cell.setAttribute("class","colored");
			row.appendChild(cell);
		});
		colCount++;

		// adding Row
		let len = table.rows[0].cells.length;
		console.log("lenths=" + len);
		let row = document.createElement("tr");

		for (let i = 0; i < len; i++) {
			var cell = document.createElement("td");
			// cell.setAttribute("class","colored");
			// cell.style.background=randomColors();
			row.appendChild(cell);
		}
		table.appendChild(row);
		rowCount++;
	}

	score += 5;
	document.getElementById("score").innerHTML = "Score : " + score;
	rndColor();
}

function colors(params) {
	let color = randomColors();
	let opacity = 0.7;
	// let table = document.getElementById("master");
	let td = document.querySelectorAll("td");
	td.forEach((cell) => {
		cell.style.opacity = "1";
		cell.style.backgroundColor = color;
	});
	let rand = Math.floor(Math.random() * td.length);
	td[rand].setAttribute("class", "diff");
	td[rand].style.opacity = opacity;
	td[rand].setAttribute("onclick", "increase()");
}

// function myScore(score) {
//     score++;

// }
