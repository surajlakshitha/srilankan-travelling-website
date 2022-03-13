//Getting the elements
const startBtn = document.querySelector(".startBtn button");
const infoBox = document.querySelector(".infoBox");
const exitBtn = document.querySelector(".buttons .exit");
const continueBtn = document.querySelector(".buttons .continue");
const quizBox = document.querySelector(".quizBox");
const mcqList = document.querySelector(".mcqList");
const timeCounter = quizBox.querySelector(".timer .timerSec");
const timeUp = quizBox.querySelector("header .timeText");

//Start Button click
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfoBox");  //showing Info Box
}

//Quit Button click
exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfoBox");  //hiding Info Box
}

//Continue Button click
continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfoBox");  //hiding Info Box
    quizBox.classList.add("activeQuizBox");  //showing Quiz Box
    getRadioValue(0);
    quesCount(1);
    timerStart(60);
}

var queCount = 0;
var queNum = 1;
var counter;
var counterLine;
var userScore = 0;
var fullTime = 0;

const nextBtn = quizBox.querySelector(".nextBtn");
const resultBox = document.querySelector(".resultBox");
const restartQuiz = resultBox.querySelector(".buttons .continue");
const exitQuiz = resultBox.querySelector(".buttons .exit");

//if user clicked the restart button
restartQuiz.onclick = ()=>{
    quizBox.classList.add("activeQuizBox");
    resultBox.classList.remove("activeResultBox");
    var queCount = 0;
    var queNum = 1;
    var timeVal = 60;
    var userScore = 0;
    getRadioValue(queCount);
    quesCount(queNum);
    clearInterval(counter);
    timerStart(timeVal);
    clearInterval(counterLine);
    timeUp.textContent = "Time Left";
} 

//if user clicked the Quiz button
exitQuiz.onclick = ()=>{
    window.location.reload();
}
    

//Next Button click
nextBtn.onclick = ()=>{
    if(queCount < ques.length - 1){
        queCount++;
        queNum++;
        getRadioValue(queCount);
        quesCount(queNum);
        clearInterval(counterLine);
        timeUp.textContent = "Time Left";
        
    }
    else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Quiz Completed");
        showingresultBox();
    }
}

//getting the questions
function  getRadioValue(Quiz){
    const queTxt = document.querySelector(".queText");
    var queTag = "<span>"+ ques[Quiz].num +" . " + ques[Quiz].que +"</span>";
    var mcqTag1 = "<div class='option'><span><input type='radio' name='ans'>"+ ques[Quiz].options[0] + '</span></div>';
    var mcqTag2 = "<div class='option'><span><input type='radio' name='ans'>"+ ques[Quiz].options[1]+'</span></div>';         
    var mcqTag3 = "<div class='option'><span><input type='radio' name='ans'>"+ques[Quiz].options[2]+'</span></div>';
    var mcqTag4 = "<div class='option'><span><input type='radio' name='ans'>"+ques[Quiz].options[3]+'</span></div>';
    queTxt.innerHTML = queTag;
    mcqList.innerHTML = mcqTag1 + mcqTag2 + mcqTag3 + mcqTag4;
    const option = mcqList.querySelectorAll(".option");
    for (var i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");       
    }
}

//answers checker
function optionSelected(ans){
    clearInterval(counterLine);
    var userAnswer = ans.textContent;
    var correctAnswer = ques[queCount].ans;
    var alloptions = mcqList.children.length;
    if (userAnswer == correctAnswer) {
        userScore += 1;
        console.log(userScore);
        ans.classList.add("correct");
        console.log("Answer is correct!");
    } else {
        ans.classList.add("wrong");
        console.log("Answer is wrong!");    
        
        // if user select the incorrect answer automatically showing the correct one
        for (var j = 0; j < alloptions; j++) {
            if (mcqList.children[j].textContent == correctAnswer) {
                mcqList.children[j].setAttribute("class", "option correct");   
            }
        }
    }

    //disable the other options
    for (var j = 0; j < alloptions; j++) {
        mcqList.children[j].classList.add("disable");
    }
    
}

//showing the result box
function showingresultBox(){
    infoBox.classList.remove("activeInfoBox");  //hiding Ifo Box
    quizBox.classList.remove("activeQuizBox");  //hiding Quiz Box
    resultBox.classList.add("activeResultBox");  //showing Result Box
    const scoreTxt = resultBox.querySelector(".scoreTxt");
    if (userScore > 16) {
        var scoreTag =  "<span>You got "+ userScore +" out of "+ ques.length +"</span>";
        scoreTxt.innerHTML = scoreTag;
    }

    else if (16 > userScore > 12) {
        var scoreTag =  "<span>You got "+ userScore +" out of "+ ques.length +"</span>";
        scoreTxt.innerHTML = scoreTag;
    }

    else{
        var scoreTag =  "<span>You got "+ userScore +" out of "+ ques.length +"</span>";
        scoreTxt.innerHTML = scoreTag;
    }

    //calculating the marks and time
    var marksTag = "<span>Marks: " + userScore*2 + "</span>";
    scoreTxt.innerHTML += "<p>" + marksTag + "</p>";
    var timeTag = "<span>Time: " + fullTime + " Seconds</span>";
    scoreTxt.innerHTML += "<p>" + timeTag + "</p>";
}

//time counter
function timerStart(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCounter.textContent = time;
        time--;
        fullTime++;         //to see the complete time
        if (time < 9) {
            var addZero = timeCounter.textContent;
            timeCounter.textContent = "0" + addZero;
        }
        if (time == 0) {
            clearInterval(counter);
            timeCounter.textContent = "00";
            timeUp.textContent = "Time Up!";
            showingresultBox();

            var correctAnswer = ques[queCount].ans;
            var alloptions = mcqList.children.length;

            for (var j = 0; j < alloptions; j++) {
                if (mcqList.children[j].textContent == correctAnswer) {
                    mcqList.children[j].setAttribute("class", "option correct");   
                }
            }

            for (let j = 0; j < alloptions; j++) {
                mcqList.children[j].classList.add("disable");
            }
        }
    }
}

//showing the question number in the footer
function quesCount(Quiz){
    const bottomQuesCounter = quizBox.querySelector(".totalQue");
    var totalQuesCountTag = "<span> "+ Quiz +" of "+ ques.length +" Questions</span>";
    bottomQuesCounter.innerHTML = totalQuesCountTag;
}