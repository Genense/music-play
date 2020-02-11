var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password:'123456',
  database:'library'
});
connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from new', function(err, result) {
    if (err) console.log("[err]"+ err.message);
    console.log('The solution is: ', result);
  });
  res.send('respond with a resource');
});

module.exports = router;
