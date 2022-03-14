let choices = ["rock", "paper", "scissors"]
let playerChoice = prompt("Please type either 'rock', 'paper' or 'scissors' to play: ")
let playerSelection = playerChoice.toLowerCase();
let computerSelection = computerPlay();

function computerPlay(){
    //computer chooses one of the three choices at random
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound(computerSelection, playerSelection) {
 
    if (playerSelection === computerSelection) {
        return("It is a tie! Try again!");
    }

    if (computerSelection === "rock" && playerSelection === "paper") {
        return("You win! Paper beats rock.");
    }

    if (computerSelection === "scissors" && playerSelection === "rock") {
        return("You win! Rock beats scissors.");
    }

    if (computerSelection === "paper" && playerSelection === "scissors") {
        return("You win! Scissors beat paper.");
    }

    if (computerSelection === "rock" && playerSelection === "scissors") {
        return("You lose! Rock beats scissors.");
    }
    
    if (computerSelection === "paper" && playerSelection === "rock") {
        return("You lose! Paper beats rock.");
    }

    if (computerSelection === "scissors" && playerSelection === "paper") {
        return("You lose! Scissors beat paper.");
    }
}

console.log(playRound(computerSelection, playerSelection));