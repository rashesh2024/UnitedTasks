// let jwtSecretKey = process.env.SECRETE_KEY;

// let user = {
// 	user: data.email,
// };
// const token = jwt.sign(data, jwtSecretKey);

// res.cookie("token", token, { maxAge: 100000 });
// res.send({
// 	alert: "login successfully...",
// });

var token = req.cookies.token;
if (token) {
	let jwtSecretKey = process.env.JWT_SECRET_KEY;
	var verfiy = jwt.verify(token, jwtSecretKey);
	res.send("welcome to dashboard");
}
