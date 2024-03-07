
$(function() {

    // $("#sqlConnection").click(function SQL(){
    //     console.log("yeah this will connect to the database");

    //     async function logSteps() {
            
    //         const response = await fetch("http://localhost:9000");
    //         const steps = await response.json();
    //         console.log(steps);
    //     };
    
    //     logSteps();
        
    // });

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

//trying to set server data globaly 



