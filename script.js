// Variable Declare for SCORES
let gameTimes = 1;
let playerScores = 0;
let computerScores = 0;
let playerSelection = "";
let computerSelection = "";
let count = 0;

// Function For Computer to Select Randomly "ROCK, PAPER, SCISSORS"
function computerPlay() {
    const choices = ["👊", "🖐️", "✂️"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function selection(e) {
    playerSelection = e.target.value;
    computerSelection = computerPlay();
}

function roundDisplay(no) {
    let span = document.querySelector(".round");
    span.textContent = no;
}

function scoresDisplay(playerScores, computerScores) {
    let div = document.querySelector(".scores");
    let playerScoreDisplay = document.createElement("h1");
    let computerScoreDisplay = document.createElement("h1");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    playerScoreDisplay.textContent = playerScores;
    div.appendChild(playerScoreDisplay);
    computerScoreDisplay.textContent = computerScores;
    div.appendChild(computerScoreDisplay);
}

function selectionDisplay(playerSelection, computerSelection) {
    let selection = document.querySelector(".selections");
    let playerSelectionDis = document.createElement("h1");
    let computerSelectionDis = document.createElement("h1");
    playerSelectionDis.textContent = playerSelection;
    selection.appendChild(playerSelectionDis);
    computerSelectionDis.textContent = computerSelection;
    selection.appendChild(computerSelectionDis);
}

function winnerDisplay(winner) {
    if (count < 1) {
        count++;
        let span = document.querySelector(".winner");
        let win = document.createElement("h1");
        // while (span.hasChildNodes()) {
        //     span.removeChild(span.firstChild);
        // }
        win.textContent = winner;
        win.style.color = "#61f179"
        span.appendChild(win);
    } else {
        return;
    }
}

function playerPlay(e) {
    if ((gameTimes < 10 && playerScores < 5 && computerScores < 5)) {
        gameTimes++;
        roundDisplay(gameTimes);
        selection(e);
        if (playerSelection === computerSelection) {
            playerScores += 0;
            computerScores += 0;
            scoresDisplay(playerScores, computerScores);
            selectionDisplay(playerSelection, computerSelection);
        } else if (playerSelection === "👊" && computerSelection === "🖐️") {
            playerScores += 0;
            computerScores += 1;
            scoresDisplay(playerScores, computerScores);
            selectionDisplay(playerSelection, computerSelection);
        } else if (playerSelection === "👊" && computerSelection === "✂️") {
            playerScores += 1;
            computerScores += 0;
            scoresDisplay(playerScores, computerScores);
            selectionDisplay(playerSelection, computerSelection);
        } else if (playerSelection === "🖐️" && computerSelection === "👊") {
            playerScores += 1;
            computerScores += 0;
            scoresDisplay(playerScores, computerScores);
            selectionDisplay(playerSelection, computerSelection);
        } else if (playerSelection === "🖐️" && computerSelection === "✂️") {
            playerScores += 0;
            computerScores += 1;
            scoresDisplay(playerScores, computerScores);
            selectionDisplay(playerSelection, computerSelection);
        } else if (playerSelection === "✂️" && computerSelection === "👊") {
            playerScores += 1;
            computerScores += 0;
            scoresDisplay(playerScores, computerScores);
            selectionDisplay(playerSelection, computerSelection);
        } else if (playerSelection === "✂️" && computerSelection === "🖐️") {
            playerScores += 1;
            computerScores += 0;
            scoresDisplay(playerScores, computerScores);
            selectionDisplay(playerSelection, computerSelection);
        } else {
            return;
        }
    } else {
        if (playerScores > computerScores) {
            winner = "Player Wins";
            winnerDisplay(winner);
        } else if (playerScores < computerScores) {
            winner = "COMPUTER IS THE WINNER";
            winnerDisplay(winner);
        } else {
            winner = "IT'S A TIE";
            winnerDisplay(winner);
        }
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        playerPlay(e);
    });
})


// // FUnction for Player to Prompt to Select "ROCK, PAPER, SCISSORS"
// function playerPlay() {
//     let choice = prompt("Enter Your Choice from [ ROCK / PAPER / SCISSORS ]").toUpperCase();
//     if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS") {
//         selected = choice;
//     } else {
//         playerPlay();
//     }
//     return selected;
// }

// // Function for GAME PLAY 
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         // declareWinner();
//         playerScores += 0;
//         computerScores += 0;
//         return "It's a TIE"
//     } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
//         // declareWinner();
//         playerScores += 0;
//         computerScores += 1;
//         return "Player LOOSE (" + playerScores + ") || Computer WIN (" + computerScores + ")";
//     } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
//         // declareWinner();
//         playerScores += 1;
//         computerScores += 0;
//         return "Player WIN (" + playerScores + ") || Computer LOOSE (" + computerScores + ")";
//     } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
//         // declareWinner();
//         playerScores += 1;
//         computerScores += 0;
//         return "Player WIN (" + playerScores + ") || Computer LOOSE (" + computerScores + ")";
//     } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
//         // declareWinner();
//         playerScores += 0;
//         computerScores += 1;
//         return "Player LOOSE (" + playerScores + ") || Computer WIN (" + computerScores + ")";
//     } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
//         // declareWinner();
//         playerScores += 1;
//         computerScores += 0;
//         return "Player WIN (" + playerScores + ") || Computer LOOSE (" + computerScores + ")";
//     } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
//         // declareWinner();
//         playerScores += 1;
//         computerScores += 0;
//         return "Player WIN (" + playerScores + ") || Computer LOOSE (" + computerScores + ")";
//     } else {
//         // declareWinner();
//         return;
//     }
// }

// // Function for Displaying Selection delcareWinner() is wrong Name for this function but it's Ok
// function declareWinner() {
//     // console.log("Player Selected " + playerSelection);
//     // console.log("Computer Selected " + computerSelection);
//     if (playerSelection === "ROCK") {
//         playerSelection = "👊"
//     }
//     if (playerSelection === "PAPER") {
//         playerSelection = "🤚"
//     }
//     if (playerSelection === "SCISSORS") {
//         playerSelection = "✂️";
//     }
//     if (computerSelection === "ROCK") {
//         computerSelection = "👊"
//     }
//     if (computerSelection === "PAPER") {
//         computerSelection = "🤚"
//     }
//     if (computerSelection === "SCISSORS") {
//         computerSelection = "✂️";
//     }
//     let div = document.querySelector(".scores");
//     let player = document.createElement("h1");
//     let computer = document.createElement("h1");

//     while (div.hasChildNodes()) {
//         div.removeChild(div.firstChild);
//     }
//     player.textContent = playerSelection;
//     div.appendChild(player);

//     computer.textContent = computerSelection;
//     div.appendChild(computer);

// }

// // Gaming Starts
// // function game() {
// //     playerSelection = playerPlay();
// //     computerSelection = computerPlay();
// //     return playRound(playerSelection, computerSelection)
// // }

// // Program Runs from this Line All Functions are Declared Above to Support Program
// // for (let i = 0; i < 5; i++) {
// //     console.log(game());
// // }

// let buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         playerSelection = e.target.value;
//         computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//         if (!(playerScores < 5 && computerScores < 5)) {
//             let winner = document.querySelector(".winner")
//             while (winner.hasChildNodes()) {
//                 winner.removeChild(winner.firstChild);
//             }
//             if (playerScores > computerScores) {
//                 let winnerPlayer = document.createElement("h1");
//                 winnerPlayer.textContent = "PLAYER IS THE WINNER";
//                 winner.appendChild(winnerPlayer);
//                 // alert("Player is THE WINNER");
//                 let x = confirm("Play Again");
//                 if (x) {
//                     location.reload();
//                 }

//             } else if (playerScores < computerScores) {
//                 let winnerCom = document.createElement("h1");
//                 winnerCom.textContent = "COMPUTER IS THE WINNER";
//                 winner.appendChild(winnerCom);
//                 // alert("Computer is THE WINNER");
//                 let x = confirm("Play Again");
//                 if (x) {
//                     location.reload();
//                 }
//             } else {
//                 alert("IT'S A TIE");
//             }
//         }
//     });
// });