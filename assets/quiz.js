
var startButton = document.getElementById("startButton");
var highScoreEl = document.getElementById("highScore");
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var resultEl = document.getElementById("result");

var questionIndex = ""
var quizTimer = questions.length * 20 

console.log({ resultEl })
console.log(quizTimer)
console.log(highScoreEl)
console.log(questionEl)
console.log(questions)


// Removes the "hide" element from the quiz 
// update class attribute to remove hide
// str.replace("hide","");

// Function to start the quiz and initiate question rendering
function startQuiz() {
    startEl.setAttribute("class", "hide");
    questionEl.setAttribute("class","question")
    questionRender()
}


// Renders the questions within the page
function questionRender() {
}

// Question Correctness Check
function isCorrect() {

}


startButton.addEventListener("click", startQuiz)



