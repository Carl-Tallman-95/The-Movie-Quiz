

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

// (1.0) Declaires the variable playButton from the id
const playButton = document.getElementById("play-button");

// Declaires the variable for the score container
const scoreContainer = document.getElementById("scoreContainer");

// (1.3) Function for hiding the "play" div content 
function hideStartScreen() {
    document.getElementById("play").style.display = "none";
}

// (1.5) Function for displaying the "quiz" div content
function displayQuiz() {
    document.getElementById("quiz").style.display = "block";
}

// (2.0) Displays the first question number in the quiz
function displayQuestionNumber(questionNumber) {
    document.getElementById("progress").innerHTML = `Question ${questionNumber} of ${questions.length}`;
}

// (2.1) Display the first question title in the quiz
function displayFirstQuestionTitle(questionIndex) {
    document.getElementById("questionText").innerHTML = questions[questionIndex].title
}

// Displays the current score
// And add the string litterals to add the text and uppdate the score
function displayScore() {
    document.getElementById('scoreContainer').innerHTML = `Score: ${score}`;
}

// (3.2) Declare the answer variables from the ids
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

// (3.3) Function for displaying the answers string into the div
function showAnswers(questionIndex) {
    answerA.innerHTML = questions[questionIndex].choiceA;
    answerB.innerHTML = questions[questionIndex].choiceB;
    answerC.innerHTML = questions[questionIndex].choiceC;
    answerD.innerHTML = questions[questionIndex].choiceD;
}

// (3.0) function for displaying the questions answers
function displayQuestion(questionIndex) {
    // (3.4) Displays the question number
    displayQuestionNumber(questionIndex +=1)
    
    // (2.1) display the first question title
    displayFirstQuestionTitle(questionIndex)
    // (3.3) Displaying the answers string
    showAnswers(questionIndex)
    // Displays the score
    displayScore()
}

// 1.2 function that, when clicked, hides the start screen and displays the first question in the quiz
function onPlayButtonClick() {
    // (1.3) hide the text and play button
    hideStartScreen()
    // (1.5) display the quiz
    displayQuiz()
    // (3.1) display the question answers
    displayQuestion(0)

}

// 1.1 Add event listener for when the user clicks the start button
// 1.4 We then call the playbutton function "onPlayButtonClick" in the event listener after the 'click'
playButton.addEventListener('click', onPlayButtonClick);

// (3.6) Function to go to the next question in the array
function onAnswerAButtonClick() {
    goToNextQuestion()
}
function onAnswerBButtonClick() {
    goToNextQuestion()
}
function onAnswerCButtonClick() {
    goToNextQuestion()
}
function onAnswerDButtonClick() {
    goToNextQuestion()
}

// (4.0)
function goToNextQuestion() {
    currentQuestionIndex +=1;
    displayQuestion(currentQuestionIndex)

}

// Individual event listeners
// (3.5) Add the function parameter for each answer event listenre
answerA.addEventListener('click', onAnswerAButtonClick);
answerB.addEventListener('click', onAnswerBButtonClick);
answerC.addEventListener('click', onAnswerCButtonClick);
answerD.addEventListener('click', onAnswerDButtonClick);



// Declare the variables
const play = document.getElementById("play");

const quiz = document.getElementById("quiz");

// Declare the question title
const questionText = document.getElementById("questionText");


const progress = document.getElementById("progress");


