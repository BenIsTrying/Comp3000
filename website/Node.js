
let http = require("http");
let port = 9000;
const express = require('express')
const app = express()


function sayHello() {
return "Hello World from Node";
}



var mysql = require('mysql');

var con = mysql.createConnection({
    host: "proj-mysql.uopnet.plymouth.ac.uk",
    user: "COMP3000_BGeorge",
    password: "ZgdF769+",
    database: "COMP3000_BGeorge"
});
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
*/

con.connect(function(err) {
    if (err) throw err;
    app.get("/", (req,res) => {
      
    
    con.query("SELECT * FROM Steps", function (err, result, fields) {
      if (err) throw err;
      res.send(result)
      console.log(result);
    });
  })
    con.query("SELECT * FROM Weight", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
});

app.listen(port,() => {
  console.log(`Listening ${port}`)
})