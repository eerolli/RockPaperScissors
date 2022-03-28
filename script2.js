let userScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let score = document.querySelector(".score");
let choiceDisplay = document.querySelector(".choicedisplay");
let winner = document.querySelector(".winner");
let gameWinner = document.querySelector(".game-winner");
let reset = document.querySelector("#reset");
let buttons = document.querySelector(".choice-buttons");
//computer makes a random choice
const computerOptions = ["rock", "paper", "scissors"];
function computerPlay(){
return computerOptions[Math.floor(Math.random()*computerOptions.length)]
}

// one round
function playRound(playerSelection, computerSelection){
    //displays what either player chose
    choiceDisplay.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}`;
    
    //display running score and add points
    if (playerSelection === computerSelection) {
        winner.textContent = "This round was a tie!"
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            userScore++;
            winner.textContent = "You win this round"
            score.textContent = `You ${userScore} vs. ${computerScore} Computer`;
        }
        else{
            computerScore++;
            winner.textContent = "Computer wins this round"
            score.textContent = `You ${userScore} vs. ${computerScore} Computer`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            userScore++;
            winner.textContent = "You win this round"
            score.textContent = `You ${userScore} vs. ${computerScore} Computer`;
        }
        else{
            computerScore++;
            winner.textContent = "Computer wins this round"
            score.textContent = `You ${userScore} vs. ${computerScore} Computer`;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            userScore++;
            winner.textContent = "You win this round"
            score.textContent = `You ${userScore} vs. ${computerScore} Computer`;
        }
        else{
            computerScore++;
            winner.textContent = "Computer wins this round"
            score.textContent = `You ${userScore} vs. ${computerScore} Computer`;
        }
    }
    
}

//function that checks who got to five wins first
function game(choice){
    let computer = computerPlay();
    let user = choice;

    playRound(user, computer);

    // when either gets to five, display winner and reset button, hide other buttons
    if (userScore === 5) {
        gameWinner.textContent = "You won the game!"
        score.textContent = `You ${userScore} vs. ${computerScore} Computer`;
        buttons.style.display = "none";
        reset.style.display = "block";
    }
    else if (computerScore === 5) {
        gameWinner.textContent = "Computer won the game!"
        score.textContent = `You ${userScore} vs. ${computerScore} Computer`;
        buttons.style.display = "none";
        reset.style.display = "block";
    }
}

//each button waits for a click, which calls the function game(playerChoice)
rock.addEventListener('click', ()=>{
    game("rock");
});
paper.addEventListener('click', ()=>{
    game("paper");
});
scissors.addEventListener('click', () =>{
    game("scissors");
});

//pressing the reset button resets the game
reset.addEventListener('click', function(){
    location.reload();
});