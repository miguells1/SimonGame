// Simon

var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    $("." + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    level++;
    $("h1").text("Level " + level);
    console.log(gamePattern);

};

// Start Game

$(document).keydown(function (event) {
    if (level === 0) {
        nextSequence();
    } else {}
});

$("h1").click(function (event) {
    if (level === 0) {
        nextSequence();
    } else {}
});

// User

var userClickedPattern = [];

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);

    animatePress(userChosenColour);


    checkAnswer();

});



function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};


// Audio

function playSound(name) {
    new Audio("sounds/" + name + ".mp3").play();
};

// Answer

function checkAnswer() {

    //Last input check if false
    if (userClickedPattern[userClickedPattern.length - 1] !== gamePattern[userClickedPattern.length - 1]) {
        gameOver();
    } else {

        //Array check if true
        if (userClickedPattern.length === gamePattern.length) {

            if ("" + userClickedPattern + "" === "" + gamePattern + "") {
                console.log(true);
                userClickedPattern = [];
                setTimeout(function () {
                    nextSequence();
                }, 500);
            }

        } else {};
    };

};



function gameOver() {
    console.log(false);
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    startOver();
    $("h1").text("Game Over, Click Here to Restart");
}

function startOver() {
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
}