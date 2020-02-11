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

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("node",req.query);
  var value = req.query;
  var table = value.table;
  var sql = 'SELECT * from '+table;
  connection.query(sql, function(err, result) {
      if (err) console.log("[err]"+ err.message);
      // console.log('The solution is: ', result);
      res.send(result);
    });
});

module.exports = router;