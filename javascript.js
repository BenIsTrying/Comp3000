/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
*/
$(function() {
    $("#submit").click(function login(){
        
        let username = $("#username").val();
        console.log(username);
        let password = $("#password").val();

        if ((username = "test") && (password = "password")){
            console.log("hooray youve logged in");
        };

    });

});