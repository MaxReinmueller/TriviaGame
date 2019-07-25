function check() {
var question1 = $("input[type=radio][name=question1]:checked" ).val();

if (question1 == "John and Mary") {
    alert("correct!")
}else {
    alert('wrong!')
}
}

$("#startQuiz").on("click", theQuiz)

function theQuiz() {
    $("#quiz").show();
    $("#startQuiz").hide();
    timer();
    decrement();

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
    }
}

function stop() {
    clearInterval(intervalId);
}