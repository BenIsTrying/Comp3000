

$(function() {

    $("#sqlConnection").click(function SQL(){
        console.log("yeah this will connect to the database");
        
    });

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
    
    
    

});

$(function StepTable() {

    console.log("step table here");

    
})
$(function Graph() {

    const xValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];//sample data
    const yValues = [3000,8000,866,14000,20000,12,10000,3000,18000,10000,8000];


    const healthChart = new Chart("healthChart", {
        type: "line",
        data: {
            labels: xValues,//shows x axis labels 
            datasets: [{
            backgroundColor:"rgba(173,173,173,1.0)",
            borderColor: "rgba(0,0,0,0.4)",
            data: yValues//uses data to plot y axis 
            }]
        },
        options: {
            legend: {display: false},
            scales: {
                 xAxes: [{ticks: {min: 0, max:31}}],
                yAxes: [{ticks: {min: 0, max:20000}}],
            }
        }
    });


});

$(function AIData() {



});

$(function WeightGraph() {

    const xValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];//sample data
    const yValues = [60,70,74,66,79,81,65,60,60,60,60];


    const healthChart = new Chart("WeightChart", {
        type: "line",
        data: {
            labels: xValues,//shows x axis labels 
            datasets: [{
            backgroundColor:"rgba(173,173,173,1.0)",
            borderColor: "rgba(0,0,0,0.4)",
            data: yValues//uses data to plot y axis 
            }]
        },
        options: {
            legend: {display: false},
            scales: {
                 xAxes: [{ticks: {min: 0, max:31}}],
                yAxes: [{ticks: {min: 0, max:120}}],
            }
        }
    });


});
$(function StepData() {

    var mysql = require('mysql');
    
    var con = mysql.createConnection({
        host: "proj-mysql.uopnet.plymouth.ac.uk",
        user: "COMP3000_BGeorge",
        password: "ZgdF769+"
    });

    sql.connect(config)
      var request = new sql.Request();
      request.query("select * from Testusers")
    
});


