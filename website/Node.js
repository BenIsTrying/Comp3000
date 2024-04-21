let http = require("http");
let port = 9000;


var express= require('express');

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "proj-mysql.uopnet.plymouth.ac.uk",
    user: "COMP3000_BGeorge",
    password: "ZgdF769+",
    database: "COMP3000_BGeorge"
});


let weightData;
let stepData;

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Steps", function (err, result, fields) {
      if (err) throw err;
      stepData = result;
      console.log(result);
    });
    con.query("SELECT * FROM Weight", function (err, result, fields) {
        if (err) throw err;
        weightData = result;
        console.log(result);
      });
    con.query("SELECT * FROM target", function (err, result, fields) {
        if (err) throw err;
        targetData = result;
        console.log(result);
    });
});


var server = express();

function sayHello() {
    return "hello";
}

let app = http.createServer(server);

server.use(express.static('public'));

server.get('/', (request, response) => {
    response.sendFile(__dirname + "/public/Index.html");
})
server.get('/health', (request, response) => {
    response.sendFile(__dirname + "/public/Health.html");
})
server.get('/main', (request, response) => {
  response.sendFile(__dirname + "/public/Main.html");
})
server.get('/about', (request, response) => {
  response.sendFile(__dirname + "/public/About.html");
})
// server.get('/style', (request, response) => {
//   response.sendFile(__dirname + "/pages/StyleSheet.css");
// })
// server.get('/js', (request, response) => {
//   response.sendFile(__dirname + "/pages/javascript.js");
// })


server.listen(port, function() {
    console.log("Server listening on port " + port);

});



server.get('/steps', (request, response) => {
    console.log(stepData);
    response.json(stepData);
})
server.get('/weight', (request, response) => {
    response.json(weightData);
})
server.get('/target', (request, response) => {
    response.json(targetData);
})





