const forward = document.getElementById("right");
const backward = document.getElementById("left");

forward.onclick = function () {
	document.getElementById("rowscroll").scrollLeft += 1200;
};
backward.onclick = function () {
	document.getElementById("rowscroll").scrollLeft -= 1200;
};
