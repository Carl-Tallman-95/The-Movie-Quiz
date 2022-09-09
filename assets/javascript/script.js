

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
