function Test() {
    var mysql = require('mysql');
    var dbconfig = require('./database');
    var pool = mysql.createPool(dbconfig.mysql);
    this.search = function(sql, req, res) {
        pool.getConnection(function(err, connection) {
            connection.query(sql, function(err, result) {
                if(err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                res.end(JSON.stringify(result));
                connection.release();
            });
        })
    };

    this.searchContext = function(sql, req, res) {
        pool.getConnection(function(err, connection) {
            connection.query(sql, function(err, result) {
                if(err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                res.end(JSON.stringify(result));
                connection.release();
            });
        })
    }

    this.add = function(sql, sqlParams, req, res) {
        pool.getConnection(function(err, connection) {
            connection.query(sql, sqlParams, function(err, result) {
                if(err) {
                    console.log('[INSERT ERROR] - ', err.message);
                    return;
                }
                res.redirect('./News.html');   //绑定到穿信息的界面
                connection.release();
            });
        })
    };

    this.delete = function(sql, req, res) {
        pool.getConnection(function(err, connection) {
            connection.query(sql, function(err, result) {
                console.log("???:test delete");
                if(err) {
                    console.log('[DELETE ERROR] - ', err.message);
                    return;
                }
                res.redirect('./News.html');
                connection.release();
            })
        })
    }
}

module.exports = Test;