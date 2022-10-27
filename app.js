//const { faker } = require('@faker-js/faker');
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

 var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpass",
    database: 'join_us'
});

app.get("/", function(req, res){
    var q = 'SELECT COUNT(*) AS count FROM users'
    connection.query(q, function (err, results){
        if (err) throw err;
        var count = results[0].count;
        //res.send("We have " + count + " users in our db")
        res.render("home",{data: count});
    });
});

app.post("/register", function(req, res){
    var new_user = {
        email:req.body.email
    };
    connection.query('INSERT INTO users SET ?', new_user, function(err, result){
        if (err) throw err;
        res.redirect("/");
    });
});

app.listen(8080, function(){
    console.log("Server running on 8080!")
})