const play = document.getElementById("play");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

const submitButton = document.getElementById("submit-button");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

let questions = [
    {
        question : "Who directed 'the shining' from 1980?",

        answerA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        choiceD : "Wrong",

        correct : "Stanley Kubrick"
    }, {

        question : "What year did the first 'Star Wars' film come out?",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        choiceD : "Wrong",

        correct : "1977"

    }, {

        question : "What car was made famous by the film 'Back to the Future'?",

        choiceA : "Correct",

        choiceB : "Wrong",

        choiceC : "Wrong",

        choiceD : "Wrong",

        correct : "DeLorean DMC-12"

    }

];

let currentQuestionIndex = 0;

let score = 0;

submitButton.addEventListener('click', nextQuestion);

function nextQuestion () {
    currentQuestionIndex++;
    question.innerHTML = questions[currentQuestionIndex].question;
}