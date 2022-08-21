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

function getPlayerChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors");
    return choice.toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    let outcome = "lose";
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
        return 'draw';
    }
    console.log(`You ${outcome}! ${winner} beats ${loser}.`)
    return outcome;
}

function game() {
    /* Play 5 rounds */
    let winTally = 0;
    for (let i = 0; i < 5; i++) {
        switch (playRound(getPlayerChoice(), getComputerChoice())) {
            case 'win':
                ++winTally;
                break
            case 'lose':
                --winTally;
                break
        };        
    }
    /* Check final result */
    if (winTally > 0) {
        console.log(`You win by ${winTally} points!`);
    } else if (winTally < 0) {
        console.log(`You lose by ${winTally} points.`);
    } else if (winTally == 0) {
        console.log(`It's a draw.`);
    } else {
        throw `winTally has an invalid value of ${winTally}`
    }
}