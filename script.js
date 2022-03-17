const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

//computer makes a random choice
function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)]
}

//one round of rock paper scissors
function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Type rock, paper or scissors").toLowerCase();
    computerSelection = computerPlay();

    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);


    if (playerSelection === computerSelection) {
        console.log("This round was a draw!")
    }

    else if (playerSelection === "rock"){
        if (computerSelection === "scissors") {
            userScore++;
            return("You won!")
        }
        else {
            computerScore++;
            return("You lost!")
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock") {
            userScore++;
            return("You won!")
        }
        else {
            computerScore++;
            return("You lost!")
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "paper") {
            userScore++;
            return("You won!")
        }
        else {
            computerScore++;
            return("You lost!")
        }
    }
}

//five rounds of rock paper scissors
function game(){
    for (let i= 0; i < 5; i++) {
        playRound();
        console.log(`You ${userScore} vs. ${computerScore} Computer`)
    }
}

game();
