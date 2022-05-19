const options = document.querySelectorAll('.options');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#p-score');
const computerScore = document.querySelector('#c-score');
const reset = document.querySelector('.reset')

reset.addEventListener('click',() => location.reload());

options.forEach((option) => {
    option.addEventListener('click', playGame);
});

function playGame() {
    const playerChoice = this.textContent;
    const computerOptions = ['rock', 'paper', 'scissors'];

    const computerChoice = computerOptions[Math.floor(Math.random() * 3)]

    playRound(playerChoice, computerChoice);
    matchScore(playerScore, computerScore);
    matchResult();
};

function playRound(playerChoice, computerChoice) {
    const currentRound = `${playerChoice} vs ${computerChoice}`;
    
    if (playerChoice === "rock" && computerChoice === "paper") {
        result.textContent = 
        (`You lose! Paper beats Rock`);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        result.textContent =  
        (`You lose! Scissors beats Paper`);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        result.textContent =  
        (`You lose! Rock beats Scissors`);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        result.textContent =  
        (`You win! Paper beats Rock`);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        result.textContent =
        (`You win! Rock beats Scissors`);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        result.textContent = 
        (`You win! Scissors beats Paper`);
    } else {
        result.textContent =  
        (`It's a draw! Both picked the same.`);
    }
    
};

function matchScore(playerScore, computerScore) {
     if (result.textContent === `You win! Paper beats Rock` || result.textContent === `You win! Scissors beats Paper` || result.textContent === `You win! Rock beats Scissors`){
        ++playerScore.textContent;
    } else if (result.textContent === "You lose! Rock beats Scissors" || result.textContent === "You lose! Scissors beats Paper" || result.textContent === "You lose! Paper beats Rock") {
        ++computerScore.textContent;
    } else {
        ++playerScore.textContent;
        ++computerScore.textContent;
    }
};

function matchResult() {
    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        if (playerScore.textContent == computerScore.textContent) {
            result.textContent = `It's a draw! Lame...`; 
            result.style.color = 'blue';
            endGame();
        } else if (playerScore.textContent > computerScore.textContent) {
            result.textContent = `VI VON!!!`
            result.style.color = 'green'
            endGame();
        } else if (playerScore.textContent < computerScore.textContent) {
            result.textContent = `You lost! OMEGALUL`;
            result.style.color = 'red';
            endGame();
        }
    };
};

function endGame() {
    options.forEach((option) => {
        option.removeEventListener('click', playGame)
    })
};