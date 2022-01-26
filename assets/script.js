var startButton = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer-countdown");
var questionOrder = document.querySelector("#quiz-container");
var myScore = 0;
var timeLeft = 60;
var highScoreStorage = JSON.parse(localStorage.getItem("quiz")) || [];
var myQuestion = [
    {
        question: "Who wrote the Harry Potter book series?",
        answers: ["J. R. R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Rick Riordan"],
        correctAnswer: "J.K. Rowling"
    },
    {
        question: "What is the original name of the first Harry Potter book?",
        answers: ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Sorcerer's Stone", "Harry Potter and the fall of the Dark Lord"],   
        correctAnswer: "Harry Potter and the Philosopher's Stone"
    },
    {
        question: "What year of school does Harry learn the spell 'Sectum Sempra'?",
        answers: ["Year 2", "Year 4", "Year 6", "Year 7"],
        correctAnswer: "Year 6"
    },
    {
        question: "What was the nickname of James Potter?",
        answers: ["Padfoot", "Prongs", "Moony", "Wormtail"],      
        correctAnswer: "Prongs"
    },
    {
        question: "Who gave Harry the Nimbus 2000?",
        answers:["Professor McGonagall", "Professor Dumbledore", "Professor Flitwick", "Professor Snape"],
        correctAnswer: "Professor McGonagall"
    },
    {
        question: "Who killed Sirius Black?",
        answers: ["Lucius Malfoy", "Bellatrix Lestrange", "Lord Voldemort", "Barty Crouch Jr."],
        correctAnswer: "Bellatrix Lestrange"
    },
    {
        question: "Who killed Bellatrix Lestrange?",
        answers: ["Ron Weasley", "Molly Weasley", "Fred Weasley", "Ginny Weasley"],
        correctAnswer: "Molly Weasley"
    },
    {
        question: "What was in the golden snitch that Dumbledore left for Harry?",
        answers: ["Resurrection Stone", "A Ring", "Gold", "A note"],
        correctAnswer: "Resurrection Stone"

    },
    {
        question: "Who opened the Chamber of Secrets?",
        answers: ["Harry Potter", "Draco Malfoy", "Ginny Weasley", "Lucius Malfoy"],             
        correctAnswer: "Ginny Weasley"
       
    },
    {
        question: "What kind of dragon did Harry face in the first task of the Triwizard Tournament?",
        answers: ["Norwegian Ridgeback", "Hungarian Horntail", "Swedish Short-Snout", "Chinese Fireball"],
        correctAnswer: "Hungarian Horntail"        
    }
];

var startQuiz = function() {
    startButton.style.display = 'none'; 
    countDown();
    nextQuestion();
}
    var timeInterval
function countDown() {

        timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--
    }
    else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        questionOrder.innerHTML = '';
        questionOrder.innerHTML = "<p> Your score " + timeLeft + "</p>"
        timerEl.style.display = 'none';
        alert("The quiz is over. Let's see how you did!");
        var newInput = document.createElement("input");
        var newLabel = document.createElement("label");
            newLabel.textContent = "Enter Initials";
            questionOrder.appendChild(newInput, newLabel);
            var inputButton = document.createElement("button");
                inputButton.textContent = "Save";
                inputButton.addEventListener("click", highScoreSave);
                questionOrder.appendChild(inputButton);
            timerEl.style.display = 'none';
        }
    }, 1000);
};


var questionIndex = -1;
function nextQuestion(event) {
    if (event) {
    var selectedAnswer = document.querySelector('input[name="radAnswer"]:checked').nextSibling.textContent;
    if (selectedAnswer === myQuestion[questionIndex].correctAnswer) {
        console.log("correct");
    }
    else {
        timeLeft = timeLeft - 15;
    }
    }
    questionOrder.innerHTML = '';
    ++questionIndex;
        

        if (questionIndex < (myQuestion.length)) {
            questionOrder.innerHTML += myQuestion[questionIndex].question + "<br />";

        for (var i = 0; i < myQuestion[questionIndex].answers.length; i++) {
            questionOrder.innerHTML += "<input type=radio id= "+i+" name=radAnswer>" + "<label for=" + i + ">" + myQuestion[questionIndex].answers[i] + "</label>" + "<br />";
        }
            var nextButton = document.createElement("input");
            nextButton.type = "button";
            nextButton.value = "Next";
            nextButton.addEventListener('click', nextQuestion);
            questionOrder.appendChild(nextButton);

        }

        else {
            clearInterval(timeInterval);
            questionOrder.innerHTML = '';
            questionOrder.innerHTML = "<p> Your score " + timeLeft + "</p>"
        var newInput = document.createElement("input");
        var newLabel = document.createElement("label");
            newLabel.textContent = "Enter Initials";
            questionOrder.appendChild(newInput, newLabel);
            var inputButton = document.createElement("button");
                inputButton.textContent = "Save";
                inputButton.addEventListener("click", highScoreSave);
                questionOrder.appendChild(inputButton);
            timerEl.style.display = 'none';
        }
};

    function highScoreSave(event) {
        var textInitials = event.target.previousSibling.value;
        var tempObject = {
            initials: textInitials, score: timeLeft

        }
        highScoreStorage.push(tempObject);
        localStorage.setItem("quiz", JSON.stringify(highScoreStorage));
        questionOrder.innerHTML = '';
        var newUl = document.createElement("ul");
    for (var i = 0; i < highScoreStorage.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = highScoreStorage[i].initials + " " + highScoreStorage[i].score;
        newUl.appendChild(newLi);
    }
        questionOrder.appendChild(newUl);
    }

startButton.addEventListener("click", startQuiz);