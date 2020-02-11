var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '314277357',
  database : 'mydb_web'
});

connection.connect();
connection.query('SELECT 1 + 1 AS user', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();