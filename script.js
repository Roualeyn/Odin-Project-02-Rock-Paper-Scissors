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
    if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
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
    document.querySelector("#player-choice").src = `./images/${playerChoice}.jpg`;
    // Set Computer Icon
    document.querySelector("#computer-choice").src = `./images/${computerChoice}.jpg`;

    // Main Logic
    switch(outcome){
        case "lose":
            document.querySelector("#status").innerText = "loses to";
            // Increase Computer Score
            const computerScore = document.querySelector("#computer-score");
            computerScore.innerText = Number(computerScore.innerText) + 1;
            break;
        case "win":
            document.querySelector("#status").innerText = "beats";
            // Increase Player Score
            const playerScore = document.querySelector("#player-score");
            playerScore.innerText = Number(playerScore.innerText) + 1;
            break;
        case "draw":
            document.querySelector("#status").innerText = "ties with";
            break;
        default:
            throw "Round has no outcome";    
    }

    // Update Round Number
    const round = document.querySelector("#round");
    round.innerText = Number(round.innerText) + 1;
    if (round.innerText == 6) {
        endGame();
    }
    }

function endGame(){
    // Update Second Header
    const playerScore = document.querySelector("#player-score").innerText;
    const computerScore = document.querySelector("#computer-score").innerText;
    if (playerScore > computerScore) {
        document.querySelector("h2").innerHTML = "You win!";
    } else if (playerScore < playerChoice) {
        document.querySelector("h2").innerHTML = "You lose";
    } else if (playerScore == computerScore) {
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

