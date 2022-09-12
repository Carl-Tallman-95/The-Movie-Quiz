

// The questions stored inside an array with questions as objects
let questions = [
    {

        title : "Who directed “the shining“ from 1980?",

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

// 2.0 Displays the first question number in the quiz
function displayFirstQuestionNumber() {
    document.getElementById("progress").innerHTML = "Question 1 of " + questions.length;
}

// 2.1 Display the first question title in the quiz
function displayFirstQuestionTitle() {
    document.getElementById("questionText").innerHTML = questions[0].title
}


// 1.2 function that, when clicked, hides the start screen and displays the first question in the quiz
function onPlayButtonClick() {
    // (1.3) hide the text and play button
    hideStartScreen()
    // (1.5) display the quiz
    displayQuiz()
    // (2.0) display the first question number
    displayFirstQuestionNumber()
    // (2.1) display the first question title
    displayFirstQuestionTitle()
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




// Score count
let score = 0;
