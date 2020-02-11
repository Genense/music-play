var express= require('express');
var router=express.Router();
var mysql = require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'library'
});
connection.connect();

router.get('/',function (req,res) {
    var userName=req.query.username;
    var password=req.query.password;
    var InsertSQL = 'INSERT INTO user(userName,password,isVIP)VALUES("'+userName+'","'+password+'","0")';
   console.log("sql",InsertSQL);
   connection.query(InsertSQL,function(err,rs){
       if(err){
           console.log("innnnnnnerrr",err);
       }
       console.log("innokkkk",rs);
       res.send(rs);
   })
})
module.exports = router;