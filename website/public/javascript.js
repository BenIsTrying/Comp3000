


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

    step5(data, stepData);

};
function step5(weightData, stepData){
    
    //user data
    fetch('http://localhost:9000/target')
    .then(res => res.json())
    .then(data => step6(data,weightData,stepData));

};
function step6( data,weightData, stepData){

    console.log(data[0].Weight_Day_01);
    console.log(stepData[0].Step_Day_01);

    smallGraph(data,weightData, stepData);

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

    function smallGraph(data,weightData, stepData) {

        const d = new Date();
        let day = d.getDate();
        console.log(day);


        //day =1;

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

        S1 = stepData[0].Step_Day_01, S6 = stepData[0].Step_Day_06, S11 = stepData[0].Step_Day_11;
        S2 = stepData[0].Step_Day_02, S7 = stepData[0].Step_Day_07, S12 = stepData[0].Step_Day_12;
        S3 = stepData[0].Step_Day_03, S8 = stepData[0].Step_Day_08, S13 = stepData[0].Step_Day_13;
        S4 = stepData[0].Step_Day_04, S9 = stepData[0].Step_Day_09, S14 = stepData[0].Step_Day_14;
        S5 = stepData[0].Step_Day_05, S10 = stepData[0].Step_Day_10, S15 = stepData[0].Step_Day_15;

        S16 = stepData[0].Step_Day_16, S21 = stepData[0].Step_Day_21, S26 = stepData[0].Step_Day_26;
        S17 = stepData[0].Step_Day_17, S22 = stepData[0].Step_Day_22, S27 = stepData[0].Step_Day_27;
        S18 = stepData[0].Step_Day_18, S23 = stepData[0].Step_Day_23, S28 = stepData[0].Step_Day_28;
        S19 = stepData[0].Step_Day_19, S24 = stepData[0].Step_Day_24, S29 = stepData[0].Step_Day_29;
        S20 = stepData[0].Step_Day_20, S25 = stepData[0].Step_Day_25, S30 = stepData[0].Step_Day_30;
        S31 = stepData[0].Step_Day_31;

        W1 = weightData[0].Weight_Day_01, W6 = weightData[0].Weight_Day_06, W11 = weightData[0].Weight_Day_11;
        W2 = weightData[0].Weight_Day_02, W7 = weightData[0].Weight_Day_07, W12 = weightData[0].Weight_Day_12;
        W3 = weightData[0].Weight_Day_03, W8 = weightData[0].Weight_Day_08, W13 = weightData[0].Weight_Day_13;
        W4 = weightData[0].Weight_Day_04, W9 = weightData[0].Weight_Day_09, W14 = weightData[0].Weight_Day_14;
        W5 = weightData[0].Weight_Day_05, W10 = weightData[0].Weight_Day_10, W15 = weightData[0].Weight_Day_15;

        W16 = weightData[0].Weight_Day_16, W21 = weightData[0].Weight_Day_21, W26 = weightData[0].Weight_Day_26;
        W17 = weightData[0].Weight_Day_17, W22 = weightData[0].Weight_Day_22, W27 = weightData[0].Weight_Day_27;
        W18 = weightData[0].Weight_Day_18, W23 = weightData[0].Weight_Day_23, W28 = weightData[0].Weight_Day_28;
        W19 = weightData[0].Weight_Day_19, W24 = weightData[0].Weight_Day_24, W29 = weightData[0].Weight_Day_29;
        W20 = weightData[0].Weight_Day_20, W25 = weightData[0].Weight_Day_25, W30 = weightData[0].Weight_Day_30;
        W31 = weightData[0].Weight_Day_31;



        const weight = [W1,W2,W3,W4,W5,W6,W7,W8,W9,W10,W11,W12,W13,W14,W15,W16,W17,W18,W19,W20,W21,W22,W23,W24,W25,W26,W27,W28,W29,W30,W31];
        const step = [S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31];
        console.log(weight[16-1]);//comes up aas undefined must do something like .value()
        console.log(W16);
        console.log("16 - ",data[0].Weight_Day_16);

        console.log(Math.max(weight[day1-1],weight[day2-1],weight[day3-1],weight[day4-1],weight[day5-1],weight[day6-1], weight[day7-1]), " ", Math.max(step[day1-1],step[day2-1],step[day3-1],step[day4-1],step[day5-1],step[day6-1],step[day7-1]));

        //use max() to find highest number
        const topStepWeek = Math.max(step[day1-1],step[day2-1],step[day3-1],step[day4-1],step[day5-1],step[day6-1],step[day7-1]);
        const topWeightWeek = Math.max(weight[day1-1],weight[day2-1],weight[day3-1],weight[day4-1],weight[day5-1],weight[day6-1], weight[day7-1]);

        const topStep = Math.max(S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31);
        const topWeight = Math.max(W1,W2,W3,W4,W5,W6,W7,W8,W9,W10,W11,W12,W13,W14,W15,W16,W17,W18,W19,W20,W21,W22,W23,W24,W25,W26,W27,W28,W29,W30,W31);


        console.log(topStep,topStepWeek,topWeight,topWeightWeek);

        const smallGraphHeight = Math.max(topStepWeek,topWeightWeek);//used to scale graph to show all data
    
    const SValues = [weight[day1-1],weight[day2-1],weight[day3-1],weight[day4-1],weight[day5-1],weight[day6-1], weight[day7-1]];

    const yValues = [step[day1-1],step[day2-1],step[day3-1],step[day4-1],step[day5-1],step[day6-1],step[day7-1]];//steps

    

    const healthChart = new Chart("miniChart", {
        type: "line",
        data: {
            labels: xValues,//shows x axis labels 
            datasets: [{
                label: 'Daily steps',
                backgroundColor:"rgba(173,10,173,1.0)",
                borderColor: "rgba(173,30,173,1)",
                fill: false,
                data: yValues//uses data to plot y axis 
                },{
                label: 'Daily weight (in grams)',
                data: SValues,
                backgroundColor:"rgba(10,200,173,1.0)",
                borderColor: "rgba(10,0,173,1)",
                fill: false
            }]
        },
        options: {
            legend: {display: true,
                
            },
            scales: {
                yAxes: [{ticks: {min: 0, max:smallGraphHeight}}],
                
            }
        }


        
        



    });
    
    const stepsGoalReached = data[0].StepTarget;
    const weightGoalReached = data[0].WeightTarget;
    console.log("step goal here -> " , stepsGoalReached, weightGoalReached);
    
    let progressWidth = (  step[day7-1]/stepsGoalReached )*100;
    console.log(" progress here -> ",progressWidth, step[day7-1]);
    if (progressWidth > 100){
        progressWidth = 99.9;
        document.getElementById("goalProgress").innerHTML = "100% of " + stepsGoalReached;
    }
    else{
        document.getElementById("goalProgress").innerHTML = progressWidth+"% of " + stepsGoalReached;
    }
    document.getElementById("greenBar").style.width = progressWidth+ "%";


    document.getElementById("tStep").innerHTML = topStep + " - Steps";
    document.getElementById("tWeight").innerHTML = topWeight/100 + "KG";
    document.getElementById("tWeekWeight").innerHTML = topWeightWeek/100 + "KG";
    document.getElementById("tWeekStep").innerHTML = topStepWeek + " - Steps";

    //use math min() to get smallest number

    const lowStepWeek = Math.min(step[day1-1],step[day2-1],step[day3-1],step[day4-1],step[day5-1],step[day6-1],step[day7-1]);
    const lowWeightWeek = Math.min(weight[day1-1],weight[day2-1],weight[day3-1],weight[day4-1],weight[day5-1],weight[day6-1], weight[day7-1]);

    const lowStep = Math.min(S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31);
    const lowWeight = Math.min(W1,W2,W3,W4,W5,W6,W7,W8,W9,W10,W11,W12,W13,W14,W15,W16,W17,W18,W19,W20,W21,W22,W23,W24,W25,W26,W27,W28,W29,W30,W31);

    

    

    console.log(progressWidth);

    if (step[day7-1] >= stepsGoalReached){
        document.getElementById("stepsMet").innerHTML = "Goal reached!";
        document.getElementById("stepsMet").style.backgroundColor = "lightgreen";
    }
    if (weight[day7-1] <= weightGoalReached){
        document.getElementById("weightMet").innerHTML = "Goal reached!";
        document.getElementById("weightMet").style.backgroundColor = "lightgreen";
    }

    

    document.getElementById("stepMettxt").innerHTML = stepsGoalReached +" - Steps";
    document.getElementById("weightMettxt").innerHTML = weightGoalReached/100 +" KG";
    document.getElementById("lStep").innerHTML = lowStep + " - Steps";
    document.getElementById("lWeight").innerHTML = lowWeight/100 + "KG";
    document.getElementById("lWeekWeight").innerHTML = lowWeightWeek/100 + "KG";
    document.getElementById("lWeekStep").innerHTML = lowStepWeek + " - Steps";


    //need to connect to next function to display data again
   // AIData(data, stepData);//the data will be sorted into a more standerd naming convention when used in next function

    const avgStepMonth = Math.mean(S1,S2,S3,S4,S5,S6,S7,S8,S9,S10,S11,S12,S13,S14,S15,S16,S17,S18,S19,S20,S21,S22,S23,S24,S25,S26,S27,S28,S29,S30,S31);
    const avgWeightMonth = Math.mean(W1,W2,W3,W4,W5,W6,W7,W8,W9,W10,W11,W12,W13,W14,W15,W16,W17,W18,W19,W20,W21,W22,W23,W24,W25,W26,W27,W28,W29,W30,W31);
    const avgStepWeek = Math.mean(step[day1-1],step[day2-1],step[day3-1],step[day4-1],step[day5-1],step[day6-1],step[day7-1]);
    const avgWegihtWeek = Math.mean(weight[day1-1],weight[day2-1],weight[day3-1],weight[day4-1],weight[day5-1],weight[day6-1], weight[day7-1]);

   checkMetGoal(avgStepMonth,avgStepMonth,avgStepWeek,avgWegihtWeek,data);

};

function checkMetGoal(avgStepMonth,avgStepMonth,avgStepWeek,avgWegihtWeek){

    console.log(avgStepMonth,avgStepMonth,avgStepWeek,avgWegihtWeek,data);//gotta work on this soon






}
