//const { faker } = require('@faker-js/faker');
var mysql = require('mysql');
var express = require('express');
var app = express();

 var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpass",
    database: 'join_us'
});


/* var data = [];
for(var i=0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
} */



//connection.query(q, [data], function(error, result) {
    //if (error) throw error;
    //console.log(result);
//});

/* connection.end(); */

app.get("/", function(req, res){
    var q = 'SELECT COUNT(*) AS count FROM users'
    connection.query(q, function (err, results){
        if (err) throw err;
        var count = results[0].count;
        res.send("We have " + count + " users in our db")
    });
});

app.listen(8080, function(){
    console.log("Server running on 8080!")
})