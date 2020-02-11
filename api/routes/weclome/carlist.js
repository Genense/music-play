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

router.get('/',function (req,res) {
    var sql='SELECT * FROM car where userName="'+req.query.username+'"';
    console.log("311",sql);
    connection.query(sql,function(err,result){
        if(err)
         console.log("111",err.message);
         res.send(JSON.stringify(result));
    })
 })
 module.exports = router;