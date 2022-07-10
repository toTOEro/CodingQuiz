var scoreListEl = document.getElementById("playerScoreList");
var scoreBoard = JSON.parse(window.localStorage.getItem("quizScores")) || [];
var backButton = document.getElementById("backButton")

// Sort scoreboard from highest to lowest
scoreBoard.sort(function (a,b) {
    return b.score - a.score
})
console.log(scoreBoard)


// Renders score
function renderScoreBoard() {
    for (let i = 0; i < scoreBoard.length; i++) {
        var playerScore = scoreBoard[i];
        var scoreListItem = document.createElement("li");
        // console.log(scoreListItem)
        // console.log(playerScore.ID)
        scoreListItem.innerHTML = `ID: ${playerScore.ID} ||| Score: ${playerScore.score}`;
        // console.log(scoreListItem)
        scoreListEl.appendChild(scoreListItem);

    }
}


// Adds ability to go back to quiz to retake
function backToQuiz() {
    window.location.href = "./index.html";
}

backButton.addEventListener("click", backToQuiz);

renderScoreBoard();