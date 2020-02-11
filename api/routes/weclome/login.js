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
var userName ='';

router.get('/',function (req,res) {
    console.log(req.query);
    if(req.query.username == 'aa'){
        res.send({user:'0'});
    }
    if(req.query.username == 'username'){
        console.log("uuuuuuuuername",userName);
        res.send({username:userName})
    }
    else if(req.query.username == 'back'){
        console.log("###############");
        userName ='';
        res.send({username:userName})
    }
    else{
        userName=req.query.username;
        var password=req.query.password;
        var selectSQL = 'select * from user where userName = "'+userName+'" and password = "'+password+'"';
        console.log("sql",selectSQL);
        connection.query(selectSQL,function (err,rs) {
            if (err)
                console.log("err",err);
            console.log("okkkkk",rs);
            res.send(rs);
        })
    }
})
module.exports = router;