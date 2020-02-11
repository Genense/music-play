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

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sql;
  var value = req.query;
  // console.log(value);
  if(value.table == 'user')
      sql = 'INSERT INTO '+value.table+'(userName,password,isVIP) VALUES("'+value.userName +'","' +value.password+'","'+value.isVIP+'")';
  else if(value.table == 'songIntroduction')
    sql = 'INSERT INTO '+value.table+'(name,author,forAlbum,introductio,publishDate) VALUES("'+value.name +'","' +value.author+'","'+value.forAlbum+'","'+value.introucitio+'","'+value.publishDate+'")';
  else if(value.table == 'good')
    sql ='INSERT INTO good (name,price,img)  values("'+value.name +'",' +value.price+',"' +value.img+'")';

    console.log("sql",sql);
  connection.query(sql, function(err, result) {
      if (err) console.log("[err]"+ err.message);
      console.log('insert ', result);
  });
  res.send('ok');
});

module.exports = router;
