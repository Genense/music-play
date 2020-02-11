/**
 * 增加收藏音樂
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
    var sql = 'INSERT userCollection(userName, songName, songAuthor) VALUES(?, ?, ?)';
    var sqlParams = new Array();
    sqlParams.push(req.query.userName);
    sqlParams.push(req.query.songName);
    sqlParams.push(req.query.songAuthor);
    connection.query(sql, sqlParams, function(err, result) {
        console.log('The collectMusic is: ' ,result);
        if (err) 
            console.log("[err]"+ err.message);
        res.send(JSON.stringify(result));
    })
})

module.exports = router;