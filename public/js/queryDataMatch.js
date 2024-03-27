let str = "Rashesh?Rashesh";

"/data?" +
	new URLSearchParams({
		id: id,
	}).toString();

console.log(str.includes("?"));
