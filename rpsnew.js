let playerscore = 0
let computerscore = 0

function getComputerChoice() {
   let rpsnumber = Math.floor(Math.random()*3)+1;
    if (rpsnumber == 1) {
        let computerSelection = "rock";
        return computerSelection;
    } else if (rpsnumber == 2) {
        let computerSelection = "paper";
        return computerSelection;
    } else if (rpsnumber == 3) {
        let computerSelection = "scissors";
        return computerSelection;
    }
}

function clickRock() {
    let playerSelection = "rock";
    return playerSelection;
}
function clickPaper() {
    let playerSelection = "paper";
    return playerSelection;
}
function clickScissors() {
    let playerSelection = "scissors";
    return playerSelection;
}


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection

    if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose");
    } else if 
       (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win");
    } else {
        console.log("You draw");
               }
    }
