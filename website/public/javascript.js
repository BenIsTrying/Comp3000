
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



function setUp(){
    step1();
}
function step3(stepData){
   
    //user data
    fetch('http://localhost:9000/weight')
    .then(res => res.json())
    .then(data => step4(data, stepData));

};

function step4( data, stepData){

    console.log(data[0].Weight_Day_01);
    console.log(stepData[0].Step_Day_01);

    smallGraph(data, stepData);

};

function step2(data){

    console.log(data[0].Step_Day_01);
    step3(data);

};

function step1(){


            
    //user data
    fetch('http://localhost:9000/steps')
    .then(res => res.json())
    .then(data => step2(data));

};

    function smallGraph(data, stepData) {

        const d = new Date();
        let day = d.getDate();
        console.log(day);


        day7=day;
        day6=day-1;
        day5=day-2;
        day4=day-3;
        day3=day-4;
        day2=day-5;
        day1=day-6;

        if(day6 < 1){
            day6 =day6 +31;
            console.log("please turn 31");
        }
        if(day5 < 1){
            day5 =day5 +31;
            console.log("please turn 30");
        }
        if(day4 < 1){
            day4 =day4 +31;
            console.log("please turn 29");
        }
        if(day3 < 1){
            day3 =day3 +31;
            console.log("please turn 28");
        }
        if(day2 < 1){
            day2 =day2 +31;
            console.log("please turn 27");
        }
        if(day1 < 1){
            day1 =day1 +31;
            console.log("please turn 26");
        }

        const xValues = [day1,day2,day3,day4,day5,day6,day7];//sample data



        

    
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


    const healthChart = new Chart("miniChart", {
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
                yAxes: [{ticks: {min: 0, max:20000}}],
                
            }
        }
    });
    


    //need to connect to next function to display data again
   // AIData(data, stepData);//the data will be sorted into a more standerd naming convention when used in next function





   function dataTrend(){
        //order tyhe weeks/months data from largest to smallest and show the range change in eithe rpositive or negative


   }

};

