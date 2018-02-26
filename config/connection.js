var mysql = require('mysql');
// var key = require('../key.js')
var connection = mysql.createConnection({
  port: 3306,
  host: 'icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
  user: 'ndmc0aulfk992pcj',
  password: 'j218r10e4zs7bscf',
  database: 'cv6kzt9natr0ne3q'
});


connection.connect(function (err) {
  if (err) {
    console.log('Error connecting' + err.stack);
    return;
  }
  console.log('Connected as id :' + connection.threadId);
});

module.exports = connection;
