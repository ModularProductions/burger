var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "q6tx74u369b1zx1c",
  password: "r3l6h989iz7cmzhf",
  database: "o0y3nw8fa48pg30w"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;