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



        QUESTIONS
        var questions = [{
        question:"In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        choiceA:'William and Elizabeth',
        choiceB:'Joseph and Catherine',
        choiceC:'John and Mary',
        choiceD:'George and Anne',
        correct:'choiceC',
    },
    {
        question:"When did the Liberty Bell get its name?",
        choiceA:'when it was made, in 1701',
        choiceB:'when it rang on July 4, 1776',
        choiceC:'in the 19th century, when it became a symbol of the abolition of slavery',
        choiceD:'none of the above',
        correct:'choiceC',
    },
    {
        question:"In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
        choiceA:'Buttermilk',
        choiceB:'Daisy',
        choiceC:'Scout',
        choiceD:'Tulip',
        correct:'choiceA',
    },
    {
        question:"Which of the following items was owned by the fewest U.S. homes in 1990?",

        choiceA:'home computer',
        choiceB:'compact disk player',
        choiceC:'cordless phone',
        choiceD:'dishwasher',

        correct:'choiceB',
    },
    {
        question:"Who holds the record for the most victories in a row on the professional golf tour?",

        choiceA:'Jack Nicklaus',
        choiceB:'Arnold Palmer',
        choiceC:'Byron Nelson',
        choiceD:'Ben Hogan',

        correct:'choiceC',
    },
];