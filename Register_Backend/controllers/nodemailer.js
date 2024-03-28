var nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

function sendMail(uData) {
	let msgId;

	let transport = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.USER_EMAIL,
			pass: process.env.USER_PASS,
		},
	});

	var mailOptions = {
		from: '"Hello from" rashesh.pithadiya.2024@gmail.com',
		to: `${uData.user_name}`,
		subject: "Nice Nodemailer test",
		text: "It’s our first message sent with Nodemailer ",
		html: `<h3>Hey ${uData.name} ! </h3><br> This trial mail using nodemailer.<br /><p>Click <a href="http://127.0.0.1:5500/public/html/loading.html?id=${uData.user_id}&token=${uData.access_token}">Here</a> to verify yout email</p>`,
	};

	transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log("Message sent: %s", info.messageId);
		msgId = info.messageId;
	});
	return msgId;
}

module.exports = sendMail;
