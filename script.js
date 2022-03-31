// Variable Declare for SCORES
let playerScores = 0;
let computerScores = 0;
let playerSelection = "";
let computerSelection = "";

// Function For Computer to Select Randomly "ROCK, PAPER, SCISSORS"
function computerPlay() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// FUnction for Player to Prompt to Select "ROCK, PAPER, SCISSORS"
function playerPlay() {
    let choice = prompt("Enter Your Choice from [ ROCK / PAPER / SCISSORS ]").toUpperCase();
    if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS") {
        selected = choice;
    } else {
        playerPlay();
    }
    return selected;
}

// Function for GAME PLAY 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        declareWinner();
        playerScores += 0;
        computerScores += 0;
        return "It's a TIE"
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        declareWinner();
        playerScores += 0;
        computerScores += 1;
        return "Player LOOSE (" + playerScores + ") || Computer WIN (" + computerScores + ")";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        declareWinner();
        playerScores += 1;
        computerScores += 0;
        return "Player WIN (" + playerScores + ") || Computer LOOSE (" + computerScores + ")";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        declareWinner();
        playerScores += 1;
        computerScores += 0;
        return "Player WIN (" + playerScores + ") || Computer LOOSE (" + computerScores + ")";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        declareWinner();
        playerScores += 0;
        computerScores += 1;
        return "Player LOOSE (" + playerScores + ") || Computer WIN (" + computerScores + ")";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        declareWinner();
        playerScores += 1;
        computerScores += 0;
        return "Player WIN (" + playerScores + ") || Computer LOOSE (" + computerScores + ")";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        declareWinner();
        playerScores += 1;
        computerScores += 0;
        return "Player WIN (" + playerScores + ") || Computer LOOSE (" + computerScores + ")";
    } else {
        declareWinner();
        return;
    }
}

// Function for Displaying Selection delcareWinner() is wrong Name for this function but it's Ok
function declareWinner() {
    console.log("Player Selected " + playerSelection);
    console.log("Computer Selected " + computerSelection);
}

// Gaming Starts
// function game() {
//     playerSelection = playerPlay();
//     computerSelection = computerPlay();
//     return playRound(playerSelection, computerSelection)
// }

// Program Runs from this Line All Functions are Declared Above to Support Program
// for (let i = 0; i < 5; i++) {
//     console.log(game());
// }

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        playerSelection = e.target.value;
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (!(playerScores < 5 && computerScores < 5))
            if (playerScores > computerScores) {
                console.log("Player is THE WINNER");
            } else if (playerScores < computerScores) {
            console.log("Computer is THE WINNER");
        } else {
            console.log("IT'S A TIE");
        }
    });
})