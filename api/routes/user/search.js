var express = require('express');
var app = express();
var router = express.Router();
var mysql      = require('mysql');

app.use('/public',express.static('public'));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password:'123456',
  database:'library'
});
connection.connect();

// app.use(cookiepareser());

var userName ='';

router.get('/', function(req, res, next) {
    var sql;
    var query = req.query;
    var table = query.table;
    console.log("req",req.query);
    if(table == 'username'){
        res.send({userName : userName});
    }
    else if(table == 'back'){
        userName='';
        res.send({userName : userName});
    }
    else {
        var searchColumns = query.searchColumns;
        if(query.password){
            userName =  query.name ;
            var password =query.password
            sql ="select * from "+table+" where "+searchColumns+" like '" + userName +"' and password like'"+password+"'";
            connection.query(sql, function(err, result) {
                if(err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                try{
                    console.log("result",result[0].id);
                    console.log("result",result[0].id);
                    res.send({id:result[0].id});
                }catch(e){
                    console.log("exption",e);
                    res.send({id:-1});
                }
            })
        }
        else {
            var name ;
            if(query.searvhColumns == 'id'){
                name = query.username;
               sql ="select * from "+table+" where "+searchColumns+" like " + name ;
            }
            else{
                 name = "%" + query.username +"%";
                 sql ="select * from "+table+" where "+searchColumns+" like '" + name +"'"; 
            }
            console.log("sql",sql);
            connection.query(sql, function(err, result) {
                if(err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                console.log("result",result);
                res.send(JSON.stringify(result));
            })
        }
    }
});

module.exports = router;
