/**
 * 查詢歌曲详情介绍
 */
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

router.get('/', function(req, res) {
    var name = req.query.title;
    var sql = "SELECT * FROM songIntroduction where name=?";
    connection.query(sql, name, function(err, result) {
        console.log('The solution is: ' ,result);
        if (err) 
            console.log("[err]"+ err.message);
        res.send(JSON.stringify(result));
    })
})

module.exports = router;