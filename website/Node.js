
let http = require("http");
let port = 9000;

function sayHello() {
return "Hello World from Node";
}

let server = http.createServer(function(request, response) {
response.end(sayHello());
});

server.listen(port, function() {
console.log("Server listening on port " + port);
});






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
    con.query("SELECT * FROM Steps", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    con.query("SELECT * FROM Weight", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
});