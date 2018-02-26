var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "da0j5ocsk2cttw71",
  password: "kgihkt71sqn2xghb",
  database: "lm5ogwv9b5uumj9d"
});


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
