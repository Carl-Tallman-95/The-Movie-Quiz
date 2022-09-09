

// The questions stored inside an array with questions as objects
let questions = [
    {
        question : "Who directed 'the shining' from 1980?",

        answerA : "Wrong",

        choiceB : "Stanley Kubrick",

        choiceC : "Wrong",

        choiceD : "Wrong",

        correct : "Stanley Kubrick"
    }, {

        question : "What year did the first 'Star Wars' film come out?",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "1977",

        choiceD : "Wrong",

        correct : "1977"

    }, {

        question : "What car was made famous by the film 'Back to the Future'?",

        choiceA : "DeLorean DMC-12",

        choiceB : "Wrong",

        choiceC : "Wrong",

        choiceD : "Wrong",

        correct : "DeLorean DMC-12"

    }

];

// 1.0 Declaires the variable playButton from the id
const playButton = document.getElementById("play-button");

// 1.3 Function for hiding the "play" div content 
function hideStartScreen() {
    document.getElementById("play").style.display = "none";
}

// 1.5 Function for displaying the "quiz" div content
function displayQuiz() {
    document.getElementById("quiz").style.display = "block";
}


// 1.2 function that, when clicked, hides the start screen and displays the quiz
function onPlayButtonClick() {
    // (1.3) hide the text and play button
    hideStartScreen()
    // (1.5) display the quiz
    displayQuiz()
}

// 1.1 Add event listener for when the user clicks the start button
// 1.4 We then call the playbutton function "onPlayButtonClick" in the event listener after the 'click'
playButton.addEventListener('click', onPlayButtonClick);


const play = document.getElementById("play");

const quiz = document.getElementById("quiz");

const question = document.getElementById("questionText");

const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");


const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");


// Question index
let currentQuestionIndex = 0;

// Score count
let score = 0;
