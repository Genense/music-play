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

router.get('/', function(req, res, next) {
    var sql;
    var value = req.query;
    var table = value.table;
    if(table == 'user'){
        sql = "UPDATE user SET userName ='"+value.userName+"' ,password ='"+value.password+"' ,isVIP ="+value.isVIP+" WHERE id = "+value.id;
           // console.log("sql",sql);
        connection.query(sql, function(err, result) {
            if (err) console.log("[err]"+ err.message);
            console.log('The solution is: ', result);
        });
    } else if(table == 'songIntroduction'){
        sql = "UPDATE songIntroduction SET name ='"+value.name+"' ,author ='"+value.author+"' ,introductio ='"+value.introductio+"' ,forAlbum ='"+value.forAlbum+"' ,publishDate ='"+value.publishDate+"' ,audio ='"+value.audio+"' WHERE id = "+value.id;
        connection.query(sql, function(err, result) {
            if (err) console.log("[err]"+ err.message);
            console.log('The solution is: ', result);
        });
    }
    else if(table =='hotSong' || table =='newSong' || table=='upSong'){
        sql ="DELETE FROM " +table
        connection.query(sql, function(err, result) {
            if (err) console.log("[err]"+ err.message);
            // console.log('delete ', result);
        });
        var length = value.date.length;
        for( var i=0;i<length;i++){
            var date =value.date[i];
            console.log("value",value.date[i]);
            var str =date.split('"');
            console.log("str",str);
            sql = 'INSERT INTO '+table+'(name,author,time) VALUES("'+str[7] +'","' +str[11]+'","'+str[15]+'")';
            //    sql = 'INSERT INTO hotSong(name,author) VALUES("111","222")';
            connection.query(sql, function(err, result) {
                if (err) console.log("[err]"+ err.message);
                console.log('insert ', result);
            });
        }
    }else if(table =='good'){
        sql = "UPDATE good SET price ="+value.price+" ,img ='"+value.img+"' WHERE name = '"+value.value+"'";
        connection.query(sql, function(err, result) {
            console.log("sqllll---",sql);
            if (err) console.log("[err]"+ err.message);
            console.log('The solution is: ', result);
        });
    }

    res.send('respond with a resource');
});

module.exports = router;
// http://p4.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244