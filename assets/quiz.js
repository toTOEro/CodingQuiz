// Defining HTML elements as variables
var startButton = document.getElementById("startButton");
var highScoreEl = document.getElementById("highScore");
var startEl = document.getElementById("start-screen");
var questionEl = document.getElementById("question-screen");
var resultEl = document.getElementById("result-screen");
var questionTitle = document.getElementById("questionTitle");
var answersLi = document.getElementById("answers")

// Initializing Variables
var questionIndex = 0
var quizTimer = questions.length * 20

console.log(answersLi)

// Function to start the quiz and initiate question rendering
function startQuiz() {
    startEl.setAttribute("class", "hide");
    questionEl.setAttribute("class", "show")
    questionRender()
    startTimer()
}


// Renders the questions within the page
function questionRender() {
    var currentQ = questions[questionIndex]
    questionEl.children[0].textContent = currentQ.question;
    answerQty = currentQ.choices.length;
    console.log(answerQty)

    for (let i = 0; i < answerQty; i++) {
        let qAnswer = currentQ.choices[i]
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class","answer");
        choiceButton.setAttribute("value",qAnswer);
        choiceButton.textContent = qAnswer;
        // console.log(qAnswer)
        console.log(choiceButton)
        answersLi.appendChild(choiceButton)
    }

}

startTimer()


// Question Correctness Check/Cycles to next question
function isCorrect() {

}


startButton.addEventListener("click", startQuiz)



