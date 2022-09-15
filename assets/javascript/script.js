/*jshint esversion: 6 */

// The questions stored inside an array with questions as objects
let questions = [
    {
        title : "Who directed “The Shining“ from 1980?",
        choiceA : "Steven Spielberg",
        choiceB : "Stanley Kubrick",
        choiceC : "John Carpenter",
        choiceD : "Tobe Hooper",
        correct : "Stanley Kubrick"
    }, {
        title : "What year did the first “Star Wars“ film come out?",
        choiceA : "1984",
        choiceB : "1980",
        choiceC : "1977",
        choiceD : "1975",
        correct : "1977"
    }, {
        title : "What car was made famous by the film “Back to the Future“?",
        choiceA : "DeLorean DMC-12",
        choiceB : "Oldsmobile Delta 88",
        choiceC : "1982 Pontiac Trans Am",
        choiceD : "Ferrari 308 GTS",
        correct : "DeLorean DMC-12"
    }, {
        title : "Which actor had the main role in “Modern Times” and “The Kid”?",
        choiceA : "Buster Keaton",
        choiceB : "Mickey Rooney",
        choiceC : "George Arliss",
        choiceD : "Charlie Chaplin",
        correct : "Charlie Chaplin"
    }, {
        title : "In “The Shawshank Redemption”, what is the Shawshank?",
        choiceA : "A Hospital",
        choiceB : "A Prison",
        choiceC : "A School",
        choiceD : "A Castle",
        correct : "A Prison"
    }, {
        title : "How fast does the bus have to go in the movie “Speed“?",
        choiceA : "50 mph",
        choiceB : "100 mph",
        choiceC : "150 mph",
        choiceD : "200 mph",
        correct : "50 mph"
    }, {
        title : "In which city is “West Side Story” set?",
        choiceA : "New York",
        choiceB : "Los Angeles",
        choiceC : "Chicago",
        choiceD : "San Francisco",
        correct : "New York"
    }, {
        title : "At what time does “It's a Wonderful Life“ take place?",
        choiceA : "Midsummer",
        choiceB : "Halloween",
        choiceC : "Christmas",
        choiceD : "Easter",
        correct : "Christmas"
    }, {
        title : "Who wrote the screenplay for “Rocky“?",
        choiceA : "Aaron Sorkin",
        choiceB : "Billy Wilder",
        choiceC : "The Coen Brothers",
        choiceD : "Sylvester Stallone",
        correct : "Sylvester Stallone"
    }, {
        title : "What color is Dorothy's shoes in “The Wizard of Oz?“",
        choiceA : "Green",
        choiceB : "Red",
        choiceC : "Blue",
        choiceD : "Yellow",
        correct : "Red"
    }
];

// Question index
let currentQuestionIndex = 0;

// Score count
let score = 0;

// Declare variables for the modal
const modal = document.getElementById("modal-popup");
const btn = document.getElementById("modal-trigger");
const span = document.getElementsByClassName("close")[0];

// Declare the variables for the quiz
const quiz = document.getElementById("quiz");
const progress = document.getElementById("progress");
const questionText = document.getElementById("questionText");
const playButton = document.getElementById("play-button");
const quizContainer = document.getElementById("quiz-container");
const scoreContainer = document.getElementById("scoreContainer");
const showReturnButton = document.getElementById("show-return-button");

// When user clicks the button or outside the button, open or close the modal
btn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(closeEvent) {
    if (closeEvent.target == modal) {
        modal.style.display = "none";
    }
};

// Hide div content 
function hideStartScreen() {
    document.getElementById("play").style.display = "none";
}

// Display "quiz" div content
function displayQuiz() {
    quiz.style.display = "block";
}

// Display question number
function displayQuestionNumber(questionNumber) {
    progress.innerHTML = `Question ${questionNumber} of ${questions.length}`;
}

// Display question title
function displayQuestionTitle(questionIndex) {
    questionText.innerHTML = questions[questionIndex].title;
}

// Display score
function displayScore() {
    document.getElementById('scoreContainer').innerHTML = `Score: ${score}`;
}

// Declare answer variables from ids
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

// Function displaying the answers string into the div
function showAnswers(questionIndex) {
    answerA.innerHTML = questions[questionIndex].choiceA;
    answerB.innerHTML = questions[questionIndex].choiceB;
    answerC.innerHTML = questions[questionIndex].choiceC;
    answerD.innerHTML = questions[questionIndex].choiceD;
}

// Function displaying the questions number, title, answers and score
function displayQuestion(questionIndex) {
    displayQuestionNumber(questionIndex +1);
    displayQuestionTitle(questionIndex);
    showAnswers(questionIndex);
    displayScore();
}

// When clicked, hides the text and play button and displays the first question in the quiz
function onPlayButtonClick() {
    hideStartScreen();
    displayQuiz();
    displayQuestion(0);
}

// Event listener for when the user clicks the start button
playButton.addEventListener('click', onPlayButtonClick);

// Function to go to the next question in the array
function onAnswerAButtonClick() {
    goToNextQuestion('A');
}
function onAnswerBButtonClick() {
    goToNextQuestion('B');
}
function onAnswerCButtonClick() {
    goToNextQuestion('C');
}
function onAnswerDButtonClick() {
    goToNextQuestion('D');
}

// Function that goes to the next question and (depending on the answer) add to the score
function goToNextQuestion(selectedChoice) {
    if (questions[currentQuestionIndex].correct === questions[currentQuestionIndex][`choice${selectedChoice}`]) {
        score++;
    }
    if (currentQuestionIndex === questions.length -1) {
        // Hide the quiz
        quizContainer.style.display = "none";
        // and display the message to the user
        scoreContainer.innerHTML = `Thank you for finishing my quiz! <br/><br/> Your score is: ${score} out of ${questions.length}`;
        // Display the return button from the div
        showReturnButton.style.display = "block";
    }
    currentQuestionIndex +=1;
    
    // If condition is met continue
    if (currentQuestionIndex <=9) {
        displayQuestion(currentQuestionIndex);
    }
}

// Individual event listeners for each answer
answerA.addEventListener('click', onAnswerAButtonClick);
answerB.addEventListener('click', onAnswerBButtonClick);
answerC.addEventListener('click', onAnswerCButtonClick);
answerD.addEventListener('click', onAnswerDButtonClick);


