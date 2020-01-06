const express = require("express");

const app = express();

app.use(express.static("staticfiles"));

app.get("/", (req, res, next) => {
	res.sendFile(`${__dirname}/site/index.html`);
})

app.get("/faq", (req, res, next) => {
	res.sendFile(`${__dirname}/site/faq.html`);
})

app.listen(process.env.PORT || 3000, () => {
	console.log("Listening....")
})
