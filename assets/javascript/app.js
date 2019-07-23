// write a list of random trivia questions and store in an object array. use object for question, properties for possible answers.

// importanat variables
var number = 10;
var intervalId;

//  onClick event to start the game
    $("#start").on("click", start)

// sets an interval for the time
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#countdown").html("<h2>" + number + "</h2>")

    if (number === 0) {
        stop();
        console.log("show answer")
    }
}

// timer starts counting down

// question is displayed with possible answers

// userpicks answer and is told if they are rigt or wrong

// next question starts after 5 seconds of notifying user
 
// store the true or false in the object value
// questions are randomly generated, 1 per object and displayed on the screen
// track true and false answers for users score per object
// make a timer that limits the amount of time users have to answer three questions