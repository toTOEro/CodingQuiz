// Defining HTML elements as variables
var startButton = document.getElementById("startButton");
var highScoreEl = document.getElementById("highScore");
var startEl = document.getElementById("start-screen");
var questionEl = document.getElementById("question-screen");
var resultEl = document.getElementById("result-screen");
var questionTitle = document.getElementById("questionTitle");
var answersLi = document.getElementById("answers");
var timerEl = document.getElementById("timer");
var correctnessEl = document.getElementById("correctness");
var scoreEl = document.getElementById("score");

// Initializing Variables
var questionIndex = 0
var quizTimer = questions.length * 20
var correct = 0
var incorrect = 0


// Setting up Timer
function timeCounter() {
    quizTimer--;
    timerEl.textContent = "Time Left: " + quizTimer;

    if (quizTimer <= 0) {
        quizComplete();
    }

}


// Function to start the quiz and initiate question rendering
function startQuiz() {
    startEl.setAttribute("class", "hide");
    questionEl.setAttribute("class", "show")
    timer = setInterval(timeCounter, 1000);
    questionRender()
}


// Renders the questions within the page
function questionRender() {
    // Pulls the current question, sets the text content of the header to the current question
    var currentQ = questions[questionIndex]
    questionEl.children[0].textContent = currentQ.question;
    answerQty = currentQ.choices.length;

    for (let i = 0; i < answerQty; i++) {
        let qAnswer = currentQ.choices[i]
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "answer");
        choiceButton.setAttribute("value", i + 1);
        choiceButton.textContent = qAnswer;
        choiceButton.onclick = isCorrect;
        answersLi.appendChild(choiceButton)
    }
    console.log(questionIndex)
}

// Function adapted from https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Question Correctness Check/Cycles to next question
function isCorrect() {
    // console.log("Button works")
    // console.log("This is the answer index value" + this.value)
    // console.log("This is the question" + questionIndex)
    // console.log("This is correct answer" + questions[questionIndex - 1].answer);
    console.log()

    // If loop to index through the questions as they are answered
    if (questionIndex + 1 < questions.length) {
        if (this.value == questions[questionIndex].answer) {
            console.log("Whooshooo!")
            questionIndex++
            removeAllChildren(answersLi)
            questionRender()
            correctnessEl.textContent = "Correct!";
            setTimeout(clearFeedback,3000);
            correct++
        } else {
            console.log("damn")
            questionIndex++
            removeAllChildren(answersLi)
            questionRender()
            correctnessEl.textContent = "Incorrect!"
            setTimeout(clearFeedback,3000);
            incorrect++
        }
    } else {
        quizComplete()
    }
}

function quizComplete() {
    clearInterval(timer);
    var submit = document.getElementById("submit");
    questionEl.setAttribute("class", "hide");
    resultEl.setAttribute("class", "show");
    scoreEl.textContent = quizTimer;
    submit.onclick = updateScoreBoard;
}

function updateScoreBoard() {
    var scoreBoard = JSON.parse(window.localStorage.getItem("quizScores")) || []
    var ID = document.getElementById("ID").value
    var score = quizTimer

    if (ID != "") {
        var newScore = {
            ID: ID,
            score: score
        };

        scoreBoard.push(newScore);
        window.localStorage.setItem("quizScores", JSON.stringify(scoreBoard));
    } else {
        window.alert("Please Enter ID!")
    }
    console.log(scoreBoard)
    console.log(newScore)

}

function clearFeedback() {
    correctnessEl.textContent = "";
}


startButton.addEventListener("click", startQuiz)


// NTS:
// For the future updates need to add a check to confirm if the question to be rendered is last
// If it's the last question, it'll change functions to pass to the final answer
