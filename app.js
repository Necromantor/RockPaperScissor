function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) {
        return (computerChoice = "rock");
    }
    else if (randomNumber == 2) {
        return (computerChoice = "paper");
    }
    else {
        return (computerChoice = "scissors");
    }
}
function playerPlay() {
    return (playerChoice = prompt("Rock, Paper or Scissor?").toLowerCase())
        
}


function playRound (playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "paper") {
        return (winner = "You lose! Paper beats Rock")
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return (winner = "You lose! Scissors beats Paper")
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return (winner = "You lose! Rock beats Scissors")
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return (winner = "You win! Paper beats Rock")
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return (winner = "You win! Rock beats Scissors")
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return (winner = "You win! Scissors beats Paper")
    } else {
        return (winner = "It's a draw! Both picked the same")
    }
}

playerCounter = 0;
computerCounter = 0;

function game () {
    for (let i = 0; i < 5; i++) {
        if (i <= 5) {
        console.log(playRound(playerPlay(), computerPlay()));
        console.log("player:", playerChoice);
        console.log("computer:", computerChoice);
        } if (winner == "You win! Paper beats Rock" || winner == "You win! Scissors beats Paper" || winner == "You win! Rock beats Scissors"){
            ++playerCounter;
            console.log("player Counter:", playerCounter);
        } else if (winner == "You lose! Rock beats Scissors" || winner == "You lose! Scissors beats Paper" || winner == "You lose! Paper beats Rock") {
            ++computerCounter;
            console.log("computer counter: ", computerCounter);
        };
    };
}


game();

if (computerCounter > playerCounter){
    console.log("Computer Wins!!!! u suck.");
} else if (playerCounter > computerCounter){
    console.log("Player Wins!!!!! nice... I guess.");
} else {
    console.log("It's a Draw! Lame.")
}

