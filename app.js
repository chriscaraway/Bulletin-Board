require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Bulletin = require(".util/board");
const query = require("./query.js");

app.set("view engine", "ejs");
app.use(express.static("assets"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", function(req, res) {
	Bulletin.getAll(function(result) {
		res.render("board",{
			messages: result.rows,
		});
	});
});

app.get("*", function (req, res) {
	res.send('Whoops!');
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
