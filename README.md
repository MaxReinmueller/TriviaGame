# TriviaGame
https://maxreinmueller.github.io/TriviaGame/.

Notes of next to do

// COMPAIRE FUNCTION
Click on an option
Compaire it to the answer
Pop up with a "GREAT JOB!!" if user is correct
pop up with the correct answer if user is wrong
move on to a new question

// SCORE FUNCTION
store how many user got correct and incorrect
give the user a score

// Style
use bootstrap to style quize
card element for multiple choice and the question
get a nice background


// selecting html elements
var start = $('#start');
var quiz = $('#quiz');
var question = $('#question')


// Starts Quiz
$("#startQuiz").on("click", theQuiz)

// checks answers
var answer = [];
$("#A").on("click", function(){
    answer.push(questions[runningQuestions].choiceA);
    checkAnswer();
    console.log(answer);
});
$("#B").on("click", function(){
    answer.push(questions[runningQuestions].choiceB);
    checkAnswer();
});
$("#C").on("click", function(){
    answer.push(questions[runningQuestions].choiceC);
    checkAnswer();
});
$("#D").on("click", function(){
    answer.push(questions[runningQuestions].choiceD);
    checkAnswer();
});

// quiz function
function theQuiz() {
    renderQuestion();
    renderProgress();
    timer()
    $(this).hide();
}



// Renders questions
var lastQuestion = questions.length - 1;
var runningQuestions = 0;


function renderQuestion() {
    var q = questions[runningQuestions];
    $("#question").html("<h3>" + q.question + "</h3>")
    $("#A").html("<p>" + "A. " + q.choiceA + "</p>");
    $("#B").html("<p>" + "B. " + q.choiceB + "</p>");
    $("#C").html("<p>" + "C. " + q.choiceC + "</p>");
    $("#D").html("<p>" + "D. " + q.choiceD + "</p>");
}


function renderProgress() {
    for (qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        $("#progress").html("<div class='prog' id=" + qIndex + "></div>");
    }
}

function answerIsCorrect() {
    $("#runningQuestions").style.backgroundColor = green;
}

// Timer
var number = 20;
var intervalId;

function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(this).hide();
}

function decrement() {
    number--;
    $("#countdown").html("<h2>" + number + "</h2>");

    if (number === 0) {
        stop();
        console.log("show answer");
    }
}

function stop() {
    clearInterval(intervalId);
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestions].correct) {
        score++
        console.log("correct!")
    } else {
        console.log("wrong!")
    }
    count = 0;
    if (runningQuestions < lastQuestion) {
        runningQuestions++;
        renderQuestion();
        stop();
        timer();
    } else {
        stop();
        timer();
        scoreRender();
    }
}



// Starts Quiz
$("#startQuiz").on("click", theQuiz)
var runningQuestions = 0;

function renderQuestion() {
    var q = questions[runningQuestions];
    $("#question").html("<h3>" + q.question + "</h3>")
    $("#A").html("<p>" + "A. " + q.choiceA + "</p>");
    $("#B").html("<p>" + "B. " + q.choiceB + "</p>");
    $("#C").html("<p>" + "C. " + q.choiceC + "</p>");
    $("#D").html("<p>" + "D. " + q.choiceD + "</p>");
}

// quiz function
function theQuiz() {
    renderQuestion();
    $(this).hide();
}



HTML
<div id="theQuiz">
        <button id="startQuiz">Start Quiz</button>
    
        <div id="quiz">
            <div id="question"></div>
            <div id="choices">
                <div class="choice" id="A"></div>
                <div class="choice" id="B"></div>
                <div class="choice" id="C"></div>
                <div class="choice" id="D"></div>
                </div>
            
        </div>
        <div id="progress"></div>
    </div>
        <!-- timer -->
        <div id="countdown"></div>

        <!-- score -->
        <div id="scoreContainer"></div>