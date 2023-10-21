
$(function() {
    
    $("#sqlConnection").click(function SQL(){
        var mysql = require('mysql');

        var con = mysql.createConnection({
            host: "localhost",
            user: "yourusername",
            password: "yourpassword"
        });
    })

    $("#submit").click(function login(){
        
        let username = $("#username").val();
        let password = $("#password").val();

        if ((username == "test") && (password == "password")){
            console.log("hooray youve logged in");
            window.location = 'Main.html';//allows user to access the other pages
        }
        else {
            alert("Incorrect, please enter you details again");
        };
    });
    
    $("#showTable").click(function Graph(){

        const healthChart = new Chart("healthChart", {
            type: "line",
            data: {},
            options: {}
        });

    })
    

});
