const express = require('express');
const mysql = require('mysql');
const path = require('path');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'prateek',
    password: 'prateek@123',
    database: 'blogs'
});

connection.connect();

var app = express();

// APIs declaration
app.get('/authors', function(req, res) {
    var rows = req.query.rows || 10;
    connection.query(`select * from authors limit ${rows}`, function (error, results, fields) {
        if (error) throw error;
        res.send({results});
    });
});

app.get('/author/:id', function(req, res) {
    connection.query(`select * from authors where id = ${req.params.id}`, function (error, results, fields) {
        if (error) throw error;
        res.send({results});
    });
});

app.get('/posts', function(req, res) {
    var rows = req.query.rows || 10;
    connection.query(`select * from posts limit ${rows}`, function (error, results, fields) {
        if (error) throw error;
        res.send({results});
    });
});

app.get('/post/:id', function(req, res) {
    connection.query(`select * from posts where id = ${req.params.id}`, function (error, results, fields) {
        if (error) throw error;
        res.send({results});
    });
});

app.get('/posts/count', function(req, res) {
    connection.query(`select author_id, count(*) as count from posts group by author_id order by count desc`, function (error, results, fields) {
        if (error) throw error;
        res.send({results});
    });
});


// Static content sequence testing
app.get('/posts/test1.js', function(req, res) {
    var rows = req.query.rows || 10;
    connection.query(`select * from posts limit ${rows}`, function (error, results, fields) {
        if (error) throw error;
        res.send({results});
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/posts/test2.js', function(req, res) {
    var rows = req.query.rows || 10;
    connection.query(`select * from posts limit ${rows}`, function (error, results, fields) {
        if (error) throw error;
        res.send({results});
    });
});

// Server start
app.listen(3000);

//MIME type learning: https://gist.github.com/aolde/8104861