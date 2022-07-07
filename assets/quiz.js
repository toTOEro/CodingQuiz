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

// Initializing Variables
var questionIndex = 0
var quizTimer = questions.length * 20
var correct = ""
var incorrect = ""

console.log(answersLi)

// Setup timer
function startTimer() {
    var timeInterval = setInterval(function () {
        if (quizTimer >= 0) {
            timerEl.textContent = "Time Left: " + quizTimer
            quizTimer--;
        } else {
            clearInterval(timeInterval);
            timerEl.textContent = "GAME OVER";
            window.alert("GAME OVER");
        };
    }, 1000);
}

// Function to start the quiz and initiate question rendering
function startQuiz() {
    startEl.setAttribute("class", "hide");
    questionEl.setAttribute("class", "show")
    startTimer()
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
    // questionIndex++
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

    if (questionIndex+1 < questions.length) {
        if (this.value == questions[questionIndex].answer) {
            console.log("Whooshooo!")
            questionIndex++
            removeAllChildren(answersLi)
            questionRender()
            correctnessEl.textContent = "Correct!"
            correct++
        } else {
            console.log("damn")
            questionIndex++
            removeAllChildren(answersLi)
            questionRender()
            correctnessEl.textContent = "Incorrect!"
            incorrect++
        }
    } else {
        window.alert("DONE!")
    }
}


startButton.addEventListener("click", startQuiz)


// NTS:
// For the future updates need to add a check to confirm if the question to be rendered is last
// If it's the last question, it'll change functions to pass to the final answer
