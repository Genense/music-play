var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var testAPIRouter = require("./routes/testAPI");
//wu
var loginRouter=require('./routes/weclome/login');
var registerRouter=require('./routes/weclome/register');
var loginsearch=require('./routes/weclome/loginsearch');
var accountlist=require('./routes/weclome/accountlist');
var carlist=require('./routes/weclome/carlist');
var del=require('./routes/weclome/del');
//admin
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user/users');
var userList = require('./routes/user/userList')
var testAPIRouter = require("./routes/testAPI");
var Search = require("./routes/user/search");
var Delete = require("./routes/user/delet");
var Add = require("./routes/user/add");
var Edit = require("./routes/user/edit");
var app = express();


// 排行榜
var searchNewList = require("./routes/RankingList/searchNewList");
var searchHotList = require("./routes/RankingList/searchHotList");
var searchSoarList = require("./routes/RankingList/searchSoarList");
var searchItem = require("./routes/RankingList/searchItem");
var collectMusic = require("./routes/RankingList/collectMusic");

//商店
var searchGood = require("./routes/shop/searchGood");
var searchGoodDetail = require("./routes/shop/searchGoodDeteail");
var addGood = require("./routes/shop/addGood");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var urlencodedParser = bodyParser.urlencoded({ extended: false});

//wu
app.use('/loginRouter',loginRouter);
app.use('/registerRouter',registerRouter);
app.use('/', indexRouter);
app.use("/testAPI", testAPIRouter);
app.use("/loginsearch",loginsearch);
app.use("/accountlist",accountlist);
app.use("/carlist",carlist);
app.use("/del",del);

//admin
app.use('/users', usersRouter);
app.use('/userList',userList);
app.use("/search",urlencodedParser, Search);
app.use("/delete",Delete);
app.use("/add",Add);
app.use("/edit",Edit);

// 排行榜
app.use("/searchNewList", searchNewList);
app.use("/searchHotList", searchHotList);
app.use("/searchSoarList", searchSoarList);
app.use("/searchItem", searchItem);
app.use("/collectMusic", collectMusic);

//商店
app.use("/searchGood",searchGood);
app.use('/searchGoodDetail',searchGoodDetail);
app.use('/addGood',addGood);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
