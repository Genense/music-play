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
//     console.log(req.query);
//     res.send(rs);
//     var userName=req.query.username;
//     var selectSQLname = 'select * from user where userName = "'+userName+'"';
//    console.log("sql",selectSQLname);
//     connection.query(selectSQLname,function (err,rs) {
//         if (err) 
//             console.log("err",err);
//         console.log("ok21211",rs);
        res.send(userName);
    // })
})
module.exports = router;