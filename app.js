require("doten").config();
const exp = require("express");
const bodyParser = require("body-parser");
const app = exp();
const Messages = require(".util/messages");
const query = require("./query.js");

app.use(exp.static("assets"));


function renderMessages(res, message) {
	Messages.getAll().then(function(items) {
		res.render("list", {
			items: items,
			message: message,
		});
	});
}

app.get("/", function(req, res) {
	renderMessages(res);
});

// app.post("/", function(req, res) {
// 	Mesages.add(req.body.item).then(function() {
// 		renderMessages(res, "Posted" + req.body.item);
//
// });

// query("SELECT * FROM ChrisCaraway"). then (function(res) {
// 	console.log(res.rows);
// });
