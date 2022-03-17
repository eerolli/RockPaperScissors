let choices = ["rock", "paper", "scissors"]
let userScore = 0;
let computerScore = 0;
let playerSelection = playerPlay();
let computerSelection = computerPlay();

function playerPlay(){
    //player input
    let playerChoice = prompt("Please type either 'rock', 'paper' or 'scissors' to play: ").toLowerCase();
    return playerChoice;
}

function computerPlay(){
    //computer chooses one of the three choices at random
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    //one round of the game

    computerPlay();
    playerPlay();
    
    if (playerSelection === computerSelection) {
        console.log("It is a tie!");
    }

    if (computerSelection === "rock" && playerSelection === "paper") {
        userScore++;
        return("You win! Paper beats rock");
    }

    if (computerSelection === "scissors" && playerSelection === "rock") {
        userScore++;
        return("You win! Rock beats scissors");
    }

    if (computerSelection === "paper" && playerSelection === "scissors") {
        userScore++;
        return("You win! Scissors beats paper");
    }

    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return("You lose! Rock beats scissors");
    }
    
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return("You lose! Paper beats rock");
    }

    if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return("You lose! Scissors beats paper");
    }
}

function game(){
    //play the game for five rounds
    for (let i = 0; i < 5; i++) {
    playRound();        
    }
    console.log(`You ${userScore} vs. ${computerScore} Computer`);
}

game();
