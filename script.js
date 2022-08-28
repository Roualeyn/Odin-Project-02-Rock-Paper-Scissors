// Declare Functions
function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
}

function playRound() {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();
    let outcome = "draw";
    let winner;
    let loser;
    if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        outcome = "win";
        winner = playerChoice;
        loser = computerChoice;
    } else if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock")) {
        outcome = "lose";
        winner = computerChoice;
        loser = playerChoice;
    } else {
        console.log(`It's a draw! Both players used ${playerChoice}.`)
        changeStatusBar(playerChoice, computerChoice, outcome);
        return;
    }
    console.log(`You ${outcome}! ${winner} beats ${loser}.`)
    changeStatusBar(playerChoice, computerChoice, outcome);
}

function changeStatusBar(playerChoice, computerChoice, outcome){
    // Set Player Icon
    scoreBoard.playerImg.src = `./images/${playerChoice}.jpg`;
    // Set Computer Icon
    scoreBoard.computerImg.src = `./images/${computerChoice}.jpg`;

    // Main Logic
    switch(outcome){
        case "lose":
            document.querySelector("#status").innerText = "loses to";
            // Increase Computer Score
            scoreBoard.computerScoreHTML.innerText = ++scoreBoard.computerScore;
            break;
        case "win":
            document.querySelector("#status").innerText = "beats";
            // Increase Player Score
            scoreBoard.playerScoreHTML.innerText = ++scoreBoard.playerScore;
            break;
        case "draw":
            document.querySelector("#status").innerText = "ties with";
            break;
        default:
            throw "Round has no outcome";
    }

    // Update Round Number
    scoreBoard.roundHTML.innerText = ++scoreBoard.round;
    if (round.innerText > 5) endGame();
}

function endGame(){
    // Update Second Header
    if (scoreBoard.playerScore > scoreBoard.computerScore) {
        document.querySelector("h2").innerHTML = "You win!";
    } else if (scoreBoard.playerScore < scoreBoard.computerScore) {
        document.querySelector("h2").innerHTML = "You lose";
    } else if (scoreBoard.playerScore == scoreBoard.computerScore) {
        document.querySelector("h2").innerHTML = "It's a tie";
    } else throw "Invalid Final Score";
    
    // Disable Buttons
    rockButton.removeEventListener('click', playRound);
    paperButton.removeEventListener('click', playRound);
    scissorsButton.removeEventListener('click', playRound);    
}


// Initialise Listeners
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

const scoreBoard = {
    playerScore: 0,
    computerScore: 0,
    playerScoreHTML: document.querySelector("#player-score"),
    computerScoreHTML: document.querySelector("#computer-score"),
    round: 0,
    roundHTML: document.querySelector("#round"),
    playerImg: document.querySelector("#player-choice"),
    computerImg: document.querySelector("#computer-choice")
};

