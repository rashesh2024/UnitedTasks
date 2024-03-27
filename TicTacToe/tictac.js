var winposi = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

var turn = "O";

var O = [];
var X = [];

function myTurn(id) {
	let cell = document.getElementById(id);
	let turnInfo = document.getElementById("turn");
	console.log(typeof cell);

	switch (turn) {
		case "O":
			if (cell.innerHTML == "O" || cell.innerHTML == "X") {
				break;
			} else {
				cell.innerHTML = "O";
				turnInfo.innerHTML = "X's Turn!!";
				O.push(id);
				turn = "X";
			}

			break;

		case "X":
			if (cell.innerHTML == "O" || cell.innerHTML == "X") {
				break;
			} else {
				cell.innerHTML = "X";
				turnInfo.innerHTML = "O's Turn!!";
				X.push(id);
				turn = "O";
			}

			break;

		default:
			break;
	}

	let Ocnt = O.length;
	let Xcnt = X.length;

	console.log(O);

	if (Ocnt >= 3) {
		for (let i = 0; i < winposi.length; i++) {
			let childArrO = winposi[i];
			console.log(childArrO);
			let Owon = wincheck(O, childArrO);
			console.log("LogX", Owon);
			console.log(Owon);

			if (Owon) {
				alert("Congratulations O won the game!!");
				reset();
			}
		}
	}

	if (Xcnt >= 3) {
		for (let i = 0; i < winposi.length; i++) {
			let childArrX = winposi[i];
			console.log(childArrX);
			let Xwon = wincheck(X, childArrX);
			console.log("Logx", Xwon);

			if (Xwon) {
				alert("Congratulations X won the game!!");
				reset();
			}
		}
	}
}

let wincheck = (parent, child) => {
	return child.every((ele) => {
		return parent.includes(ele);
	});
};

function reset(params) {
	let cell = document.querySelectorAll("td");
	cell.forEach((ele) => {
		ele.innerHTML = "";
	});

	let turnInfo = document.getElementById("turn");
	turnInfo.innerHTML = "O's Turn!!";

	O = [];
	X = [];

	turn = "O";
}
