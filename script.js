const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");
const choices = document.querySelectorAll(".choice");
const resetButton = document.getElementById("reset-button");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["👊", "🖐️", "✌️" ,"❤️"];
    const randomIndex = Math.floor(Math.random() * 4);
    return choices[randomIndex];
}
function playRound(playerChoice, computerChoice) {
  
    if(computerChoice == "️️❤️"){
        computerScore++;
        return playerChoice+" VS "+computerChoice;
    } else if (
        (computerChoice === "👊" && playerChoice=== "✌️") ||
        (computerChoice === "🖐️" && playerChoice === "👊") ||
        (computerChoice === "❤️" && playerChoice === "👊") ||
        (computerChoice === "❤️" && playerChoice === "✌️") ||
        (computerChoice === "❤️" && playerChoice === "🖐️") ||
        (computerChoice === "✌️" && playerChoice === "🖐️")) 
        {
            computerScore++;
            return playerChoice+" VS "+computerChoice;
        }
    if(playerChoice == "️️❤️"){
        playerScore++;
        return playerChoice+" VS "+computerChoice;
    }    
    else if (playerChoice === computerChoice) {
        return playerChoice+" VS "+computerChoice;
    } else if (
        (playerChoice === "👊" && computerChoice === "✌️") ||
        (playerChoice === "🖐️" && computerChoice === "👊") ||
        (playerChoice === "❤️" && computerChoice === "👊") ||
        (playerChoice === "❤️" && computerChoice === "✌️") ||
        (playerChoice === "❤️" && computerChoice === "🖐️") ||
        (playerChoice === "✌️" && computerChoice === "🖐️")) 
        {
            playerScore++;
            return playerChoice+" VS "+computerChoice;
    } else {
        return playerChoice+" VS "+computerChoice;
    }

}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    resultMessage.textContent = "";
}
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        // const playerChoice = choice.getAttribute("data-choice");
        const playerChoice = computerPlay();
        const computerChoice = computerPlay();
        const computerChoice2 = computerPlay();
        const roundResult = playRound(playerChoice, computerChoice);
        // const roundResult = tex(playerChoice, computerChoice);
        resultMessage.textContent = roundResult;
        updateScore();
    });
});

resetButton.addEventListener("click", resetGame);
