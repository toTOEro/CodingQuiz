// Defining HTML elements as variables
var startButton = document.getElementById("startButton");
var highScoreEl = document.getElementById("highScore");
var startEl = document.getElementById("start-screen");
var questionEl = document.getElementById("question-screen");
var resultEl = document.getElementById("result-screen");
var questionTitle = document.getElementById("questionTitle");
var answersLi = document.getElementById("answers");
var timerEl = document.getElementById("timer");

// Initializing Variables
var questionIndex = 0
var quizTimer = questions.length * 20

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
    questionRender()
    startTimer()
}


// Renders the questions within the page
function questionRender() {
    // Pulls the current question, sets the text content of the header to the current question
    var currentQ = questions[questionIndex]
    questionEl.children[0].textContent = currentQ.question;
    answerQty = currentQ.choices.length;
    console.log(currentQ)
    for (let i = 0; i < answerQty; i++) {
        let qAnswer = currentQ.choices[i]
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "answer");
        choiceButton.setAttribute("value", i+1);
        choiceButton.textContent = qAnswer;
        choiceButton.onclick = isCorrect;
        answersLi.appendChild(choiceButton)
    }
    questionIndex++
}



// Question Correctness Check/Cycles to next question
function isCorrect() {
    console.log("Button works")
    console.log(this.value)
    console.log(questionIndex)
    if (this.value == questions[questionIndex-1].answer) {
        console.log("Whooshooo!")
    } else (
        console.log("damn")

    )
    // if (this.value = )
}


startButton.addEventListener("click", startQuiz)



