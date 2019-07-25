// selecting html elements
var start = $('#start');
var quiz = $('#quiz');
var question = $('#question')


// List of questions
var questions = [
    {
    question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
    choiceA:'William and Elizabeth',
    choiceB:'Joseph and Catherine',
    choiceC:'John and Mary',
    choiceD:'George and Anne',
    correct: 'c',
},
{
    question: "When did the Liberty Bell get its name?",
    choiceA: 'when it was made, in 1701',
    choiceB: 'when it rang on July 4, 1776',
    choiceC: 'in the 19th century, when it became a symbol of the abolition of slavery',
    choiceD: 'none of the above',
    correct: 'c',
},
{
    question: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
    choiceA: 'Buttermilk',
    choiceB: 'Daisy',
    choiceC: 'Scout',
    choiceD: 'Tulip',
    correct: 'a',
},
{
    question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
    choiceA: 'home computer',
    choiceB: 'compact disk player',
    choiceC:'cordless phone',
    choiceD:'dishwasher',
    correct: 'b',
},
{
    question: "Who holds the record for the most victories in a row on the professional golf tour?",
    choiceA: 'Jack Nicklaus',
    choiceB: 'Arnold Palmer',
    choiceC: 'Byron Nelson',
    choiceD: 'Ben Hogan',
    correct: 'c',
},
];

var lastQuestion = questions.length - 1;
var runningQuestions = 0;

function renderQuestion() {
    var q = questions[runningQuestions];

    $("#question").html("<h3>" + q.question + "</h3>")
    $("#A").html("<p>" + q.choiceA + "</p>");
    $("#B").html("<p>" + q.choiceB + "</p>");
    $("#C").html("<p>" + q.choiceC+ "</p>");
    $("#D").html("<p>" + q.choiceD + "</p>");
}


function renderProgress(){
    for (qIndex = 0; qIndex <= lastQuestion; qIndex++){
    $("#progress").html("<div class='prog' id="+ qIndex +"></div>");
    }
}


// variables for timer
var number = 20;
var intervalId;


$("#startQuiz").on("click", theQuiz)

function theQuiz() {
    renderQuestion();
    renderProgress();
    timer()
    $(this).hide();
}


function checkBoxes() {
    var box = $("<button>");
    box.addClass("checkbox")
    box.text("✓")
}






// Timer
function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $(this).hide();   
   
}

// decreases the timer and updates html
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






// question is displayed with possible answers

// userpicks answer and is told if they are rigt or wrong

// next question starts after 5 seconds of notifying user

// store the true or false in the object value
// questions are randomly generated, 1 per object and displayed on the screen
// track true and false answers for users score per object
// make a timer that limits the amount of time users have to answer three questions