let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rpsnumber = (Math.floor(Math.random()*3)+1);
    return rpsnumber;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == 1 ||
       playerSelection == "paper" && computerSelection == 2 ||
       playerSelection == "scissors" && computerSelection == 3){
        computerScore++;
        playerScore++;
        return `Draw! Play again! ${playerScore} vs ${computerScore}`;
    }

    else if (playerSelection == "rock" && computerSelection == 2 ||
    playerSelection == "paper" && computerSelection == 3 ||
    playerSelection == "scissors" && computerSelection == 1) {
        computerScore++;
        return `You lose! Keep going! ${playerScore} vs ${computerScore}`;
}

    else if (playerSelection == "rock" && computerSelection == 3 ||
    playerSelection == "paper" && computerSelection == 1 ||
    playerSelection == "scissors" && computerSelection == 2) {
        playerScore++;
        return `You win! Nice! ${playerScore} vs ${computerScore}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
         playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
         computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You win ${playerScore} vs ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lose ${playerScore} vs ${computerScore}!`);
    } else {
        console.log(`You draw ${playerScore} vs ${computerScore}!`);
    }
}
game();