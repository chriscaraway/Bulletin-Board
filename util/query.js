const pg = require("pg");
const config = {
	user: "postgres",
	database: "bulletinboard",
	password: "hearsay95",
	host: "localhost",
	post: 5432,
};

const pool = new pg.Pool(config);
const bodyParser = require("body-parser");


pool.on("error", function(err) {
	console.error("Oh no there's an error", err);
});

pool.query("SELECT * FROM messages")
	.then(function(res) {
		console.log("All messages", res.rows);
	})
	.catch(function(err) {
		console.error("Where the message db at?", err);
	});

module.exports = function(queryString, values, cb) {
	return pool.query(queryString, values, cb);
};
