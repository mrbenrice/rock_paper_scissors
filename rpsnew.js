let playerScore = 0
let computerScore = 0

//Get computer choice based on random number generated, and return.
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

//Set paramters for each outcome & show the user on-screen.
function playRound(playerSelection, computerSelection) {

        if (playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
            score.innerHTML = "You lose!";
            compscore.innerHTML = "Computer: " + computerScore;
            playscore.innerHTML = "You: " + playerScore;
        } else if 
           (playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++;
            score.innerHTML = "You win!";
            compscore.innerHTML = "Computer: " + computerScore;
            playscore.innerHTML = "You: " + playerScore;
        } else {
            score.innerHTML = "You draw!";
            compscore.innerHTML = "Computer: " + computerScore;
            playscore.innerHTML = "You: " + playerScore;
        }
//Ensure the score cannot go forever.
     gameEnd();
}

//Order the play so when function activated, each button allows
//the user to make their choice - then compare that choice with 
//the computer's generated selection.
//Compare results using playRound.
    function game() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                playerSelection = button.className;
                computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
            })
        
        })
}

function gameEnd() {
    if (playerScore == 5) {
        document.getElementById('btnr').disabled = true;
        document.getElementById('btnp').disabled = true;
        document.getElementById('btns').disabled = true;


        btnr.style.display = 'none';
        btnp.style.display = 'none';
        btns.style.display = 'none';

        btnr.style.backgroundColor = "white";
        btnp.style.backgroundColor = "white";
        btns.style.backgroundColor = "white";

        score.innerHTML = `You win ${playerScore} to ${computerScore}.   `

        const reloadbtn = document.createElement('button');
        reloadbtn.style.verticalAlign = 'bottom';
        reloadbtn.style.backgroundColor = 'black';
        reloadbtn.style.color = '#f4427d'
        reloadbtn.style.border = '3px solid #f4427d'
        reloadbtn.style.borderRadius = '10px';
        reloadbtn.style.marginTop = '15px';
        reloadbtn.style.marginLeft = '30px';
        reloadbtn.style.marginRight = '30px';
        reloadbtn.style.marginBottom = '5px';
        reloadbtn.textContent = "Play again?";
        score.appendChild(reloadbtn);
        reloadbtn.addEventListener('click', () => {
            location.reload();
        })

    } else if (computerScore == 5) {
        document.getElementById('btnr').disabled = true;
        document.getElementById('btnp').disabled = true;
        document.getElementById('btns').disabled = true;

        btnr.style.display = 'none';
        btnp.style.display = 'none';
        btns.style.display = 'none';

        btnr.style.backgroundColor = "white";
        btnp.style.backgroundColor = "white";
        btns.style.backgroundColor = "white";

        score.innerHTML = `You lose ${playerScore} to ${computerScore}.`

        const reloadbtn = document.createElement('button');
        reloadbtn.style.verticalAlign = 'bottom';
        reloadbtn.style.backgroundColor = 'black';
        reloadbtn.style.color = '#f4427d'
        reloadbtn.style.border = '3px solid #f4427d'
        reloadbtn.style.borderRadius = '10px';
        reloadbtn.style.marginTop = '15px';
        reloadbtn.style.marginLeft = '30px';
        reloadbtn.style.marginRight = '30px';
        reloadbtn.style.marginBottom = '5px';
        reloadbtn.textContent = "Play again?";
        score.appendChild(reloadbtn);
        reloadbtn.addEventListener('click', () => {
            location.reload();
        })
    }
}



//DOM containers & activators.
    const container = document.querySelector('.container');
    const results = document.createElement('div');
    results.style.marginTop = '15px';
    container.appendChild(results);

    const playscore = document.createElement('p');
    playscore.style.color = '#f4427d';
    playscore.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    playscore.style.padding = '15px';
    playscore.textContent = "You: " + playerScore
    results.appendChild(playscore);

    const compscore = document.createElement('p');
    compscore.style.color = '#f4427d';
    compscore.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    compscore.style.padding = '15px';
    compscore.textContent = "Computer: " + computerScore
    results.appendChild(compscore);

    const score = document.querySelector('.score');

//Don't allow the start button to be clicked twice (as this can 
//negatuvely affect the scoring performance.)
    startb.addEventListener('click', () => {
        document.getElementById('startb').disabled = true;
        startb.style.display = 'none';
        startb.innerHTML = "Select choice:"
        startb.style.background = 'rgba (0, 0, 0, 0.2)'
        startb.style.transform = (scale(1.0));
    })



    




    //Background - taken from the below creator

    // geting canvas by Boujjou Achraf
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width/font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    //drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#f4427d";//green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random chinese character to print
            var text = matrix[Math.floor(Math.random()*matrix.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 35);