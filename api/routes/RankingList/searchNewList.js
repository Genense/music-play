/**
 * 查詢新歌榜的數據
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
    var sql = 'SELECT * FROM newSong';
    connection.query(sql, function(err, result) {
        console.log('The solution is: ' ,result);
        if (err) 
            console.log("[err]"+ err.message);
        res.send(JSON.stringify(result));
    })
})

module.exports = router;

