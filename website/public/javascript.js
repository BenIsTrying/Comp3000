
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



});

    function getDataForGraph(){
        getUserData();
    }
    function getUserWeight(stepData){


                
        //user data
        fetch('http://localhost:9000/weight')
        .then(res => res.json())
        .then(data => collectAllData(data, stepData));

    };

    function collectAllData( data, stepData){

        console.log(data[0].Weight_Day_01);
        console.log(stepData[0].Step_Day_01);

        Graph(data, stepData);

    };

    function useUserData(data){

        console.log(data[0].Step_Day_01);
        getUserWeight(data);

    };

    function getUserData(){


                
        //user data
        fetch('http://localhost:9000/steps')
        .then(res => res.json())
        .then(data => useUserData(data));

    };

    

    function AIData(WeightData, StepData) {

        console.log(WeightData, StepData);

    };

    

        function Graph(data, stepData) {



        //let S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31;
        //let W1,W2,W3,W4,W5,W6,W7,W8,W9,W10,W11,W12,W13,W14,W15,W16,W17,W18,W19,W20,W21,W22,W23,W24,W25,W26,W27,W28,W29,W30,W31;

        // S1 = stepData[0].Step_Day_01, S6 = stepData[0].Step_Day_06, S11 = stepData[0].Step_Day_11;
        // S2 = stepData[0].Step_Day_02, S7 = stepData[0].Step_Day_07, S12 = stepData[0].Step_Day_12;
        // S3 = stepData[0].Step_Day_03, S8 = stepData[0].Step_Day_08, S13 = stepData[0].Step_Day_13;
        // S4 = stepData[0].Step_Day_04, S9 = stepData[0].Step_Day_09, S14 = stepData[0].Step_Day_14;
        // S5 = stepData[0].Step_Day_05, S10 = stepData[0].Step_Day_10, S15 = stepData[0].Step_Day_15;

        // S16 = stepData[0].Step_Day_16, S21 = stepData[0].Step_Day_06, S11 = stepData[0].Step_Day_11;
        // S17 = stepData[0].Step_Day_17, S22 = stepData[0].Step_Day_07, S12 = stepData[0].Step_Day_12;
        // S18 = stepData[0].Step_Day_18, S23 = stepData[0].Step_Day_08, S13 = stepData[0].Step_Day_13;
        // S19 = stepData[0].Step_Day_19, S24 = stepData[0].Step_Day_09, S14 = stepData[0].Step_Day_14;
        // S20 = stepData[0].Step_Day_20, S10 = stepData[0].Step_Day_10, S15 = stepData[0].Step_Day_15;

        // W1 = data[0].Weight_Day_01;
        // W2 = data[0].Weight_Day_02;
        // W3 = data[0].Weight_Day_03;
        // W4 = data[0].Weight_Day_04;
        // W5 = data[0].Weight_Day_05;

        const xValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];//sample data
        const SValues = [data[0].Weight_Day_01,data[0].Weight_Day_02,data[0].Weight_Day_03,data[0].Weight_Day_04,data[0].Weight_Day_05,
                        data[0].Weight_Day_06, data[0].Weight_Day_07, data[0].Weight_Day_08, data[0].Weight_Day_09, data[0].Weight_Day_10,
                        data[0].Weight_Day_11, data[0].Weight_Day_12, data[0].Weight_Day_13, data[0].Weight_Day_14, data[0].Weight_Day_15,
                        data[0].Weight_Day_16, data[0].Weight_Day_17, data[0].Weight_Day_18, data[0].Weight_Day_19, data[0].Weight_Day_20,
                        data[0].Weight_Day_21, data[0].Weight_Day_22, data[0].Weight_Day_23, data[0].Weight_Day_24, data[0].Weight_Day_25,
                        data[0].Weight_Day_26, data[0].Weight_Day_27, data[0].Weight_Day_28, data[0].Weight_Day_29, data[0].Weight_Day_30,
                        data[0].Weight_Day_31];

        const yValues = [stepData[0].Step_Day_01,stepData[0].Step_Day_02,stepData[0].Step_Day_03, stepData[0].Step_Day_04, stepData[0].Step_Day_05,
                        stepData[0].Step_Day_06, stepData[0].Step_Day_07, stepData[0].Step_Day_08, stepData[0].Step_Day_09, stepData[0].Step_Day_10,
                        stepData[0].Step_Day_11, stepData[0].Step_Day_12, stepData[0].Step_Day_13, stepData[0].Step_Day_14, stepData[0].Step_Day_15,
                        stepData[0].Step_Day_16, stepData[0].Step_Day_17, stepData[0].Step_Day_18, stepData[0].Step_Day_19, stepData[0].Step_Day_20,
                        stepData[0].Step_Day_21, stepData[0].Step_Day_22, stepData[0].Step_Day_23, stepData[0].Step_Day_24, stepData[0].Step_Day_25,
                        stepData[0].Step_Day_26, stepData[0].Step_Day_27, stepData[0].Step_Day_28, stepData[0].Step_Day_29, stepData[0].Step_Day_30,
                        stepData[0].Step_Day_31];//steps


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
                legend: {display: true,
                    labels: {
                        
                    }},
                scales: {
                    xAxes: [{ticks: {min: 0, max:31}}],
                    yAxes: [{ticks: {min: 0, max:20000}}],
                    
                }
            }
        });
        


        //need to connect to next function to display data again
        AIData(data, stepData);//the data will be sorted into a more standerd naming convention when used in next function

    };
    
