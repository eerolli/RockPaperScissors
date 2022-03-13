let choices = ["rock", "paper", "scissors"]
let computerSelection = computerPlay();
let playerSelection = prompt("Play a round of rock paper scissors by typing either 'rock', 'paper' or 'scissors': ")

function computerPlay(){
    //computer chooses one of the three choices at random
    let selection = choices[Math.floor(Math.random() * choices.length)];
    return selection;
}

function round(computerSelection, playerSelection) {
    
}

console.log("Computer chose " + computerPlay());
