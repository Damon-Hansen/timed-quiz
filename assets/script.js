var quizContainer = document.querySelector("#quiz");
var resultsContainer = document.querySelector("#results");
var submitButton = document.querySelector("#submit");
var questions = [
    {
        question: "Who wrote the Harry Potter book series?",
        answers: {
            a: "J. R. R. Tolkien",
            b: "J.K. Rowling",
            c: "George R.R. Martin",
            d: "Rick Riordan"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the original name of the first Harry Potter book?",
        answers: {
            a: "Harry Potter and the Philosopher's Stone",
            b: "Harry Potter and the Chamber of Secrets",
            c: "Harry Potter and the Sorcerer's Stone",
            d: "Harry Potter and the fall of the Dark Lord"
        },
        correctAnswer: "a"
    },
    {
        question: "What year of school does Harry learn the spell 'Sectum Sempra'?",
        answers: {
            a: "Year 2",
            b: "Year 4",
            c: "Year 6",
            d: "Year 7"
        },
        correctAnswer: "c"
    },
    {
        question: "What was the nickname of James Potter?",
        answers: {
            a: "Padfoot",
            b: "Prongs",
            c: "Moony",
            d: "Wormtail"
        },
        correctAnswer: "b"
    },
    {
        question: "Who gave Harry the Nimbus 2000?",
        answers:{
            a: "Professor McGonagall",
            b: "Professor Dumbledore",
            c: "Professor Flitwick",
            d: "Professor Snape"
        },
        correctAnswer: "a"
    },
    {
        question: "Who killed Sirius Black?",
        answers: {
            a: "Lucius Malfoy",
            b: "Bellatrix Lestrange",
            c: "Lord Voldemort",
            d: "Barty Crouch Jr."
        },
        correctAnswer: "b"
    },
    {
        question: "Who killed Bellatrix Lestrange?",
        answers: {
            a: "Ron Weasley",
            b: "Molly Weasley",
            c: "Fred Weasley",
            d: "Ginny Weasley"
        },
        correctAnswer: "b"
    },
    {
        question: "What was in the golden snitch that Dumbledore left for Harry?",
        answers: {
            a: "Resurrection Stone",
            b: "A Ring",
            c: "Gold",
            d: "A note"
        },
        correctAnswer: "a"
    },
    {
        question: "Who opened the Chamber of Secrets?",
        answers: {
            a: "Harry Potter",
            b: "Draco Malfoy",
            c: "Ginny Weasley",
            d: "Lucius Malfoy"
        },
        correctAnswer: "c"
    },
    {
        question: "What kind of dragon did Harry face in the first task of the Triwizard Tournament?",
        answers: {
            a: "Norwegian Ridgeback",
            b: "Hungarian Horntail",
            c: "Swedish Short-Snout",
            d: "Chinese Fireball"
        },
        correctAnswer: "b"
    },
]

var buildQuiz = function() {

};

var showResults = function() {

};

submitButton.addEventListener("click", showResults);