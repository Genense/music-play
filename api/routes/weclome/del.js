var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'123456',
    database:'library'
});
connection.connect();


router.get('/', function(req, res, next) {
    var value = req.query;
    console.log("req",value);
    var sql ="delete from "+value.table+" where "+value.deletColumns+" like '" + value.userName +"'";
    console.log("sqllllllll",sql);
    connection.query(sql, function(err, result) {
        if(err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.send('ok');
    })
});

module.exports = router;