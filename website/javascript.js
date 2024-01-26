

$(function() {

    $("#sqlConnection").click(function SQL(){
        console.log("yeah this will connect to the database");

        async function logSteps() {
            
            const response = await fetch("http://localhost:9000");
            const steps = await response.json();
            console.log(steps);
        };
    
        logSteps();
        
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

    function getUserData(){
                
        //user data
        fetch('http://localhost:9000/steps')
        .then(res => res.json())
        .then(data => useUserData(data));
    };

    
        
    $(function Graph() {



        let S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31;
        let W1,W2,W3,W4,W5,W6,W7,W8,W9,W10,W11,W12,W13,W14,W15,W16,W17,W18,W19,W20,W21,W22,W23,W24,W25,W26,W27,W28,W29,W30,W31;

        S1 = 10000;
        S2 = 2000;
        S3 = 3000;
        S4 = 4500;
        S5 = 8023;

        W1 = 6000;
        W2 = 6100;
        W3 = 6050;
        W4 = 6900;
        W5 = 7100;

        const xValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];//sample data
        const SValues = [W1,W2,W3,W4,W5,W6,W7,W8,W9,W10,W11,W12,W13,W14,W15,W16,W17,W18,W19,W20,W21,W22,W23,W24,W25,W26,W27,W28,W29,W30,W31];
        const yValues = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31];//steps


        const healthChart = new Chart("Chart", {
            type: "line",
            data: {
                labels: xValues,//shows x axis labels 
                datasets: [{
                backgroundColor:"rgba(173,10,173,1.0)",
                borderColor: "rgba(173,30,173,1)",
                fill: false,
                data: yValues//uses data to plot y axis 
                },{
                    data: SValues,
                    backgroundColor:"rgba(10,200,173,1.0)",
                    borderColor: "rgba(10,0,173,1)",
                    fill: false
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




    
    

});

$(function StepTable() {

    console.log("step table here");



    
})


$(function AIData() {



});
