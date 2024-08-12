function getComputerChoice() {
    let num1 = (Math.random() * 100);
    if (num1 >= 66) {
        return "rock"
    } else if (num1 <= 33) {
        return "paper"
    } else {
        return "scissors"
    }
}

const rpsChoices = document.querySelector("#rpsChoices")
const results = document.querySelector("#results")
const button = document.querySelectorAll("button")

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        for (let i = 0; 1 < button.length; i++) {
            e.stopPropagation();
            button.disabled = true;
        }
    } else if (humanChoice === computerChoice) {
        results.textContent = `Tie! No winner this round. You: ${humanScore} Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore
        results.textContent = `You Lose! Paper beats Rock! You: ${humanScore} Computer: ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore
        results.textContent = `You Win! Rock beats Scissors! You: ${humanScore} Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ++computerScore
        results.textContent = `You Lose! Scissors beats Paper! You: ${humanScore} Computer: ${computerScore}`
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore
        results.textContent = `You Win! Paper beats Rock! You: ${humanScore} Computer: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore
        results.textContent = `You Lose! Rock beats Scissors! You: ${humanScore} Computer: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore
        results.textContent = `You Win! Scissors beats Paper! You: ${humanScore} Computer: ${computerScore}`
    } 
}

rpsChoices.addEventListener("click", (e) => {
    let target = e.target;
    let humanChoice;
    if (target.id === "rock") {
         humanChoice = "rock"
    } else if (target.id === "paper") {
         humanChoice = "paper"
    } else if (target.id === "scissors") {
         humanChoice = "scissors"
    }
    playRound(humanChoice, getComputerChoice());
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {   
        results.textContent = `Game Over! You Win! Your score = ${humanScore}, Computer score = ${computerScore}`
    } else if (humanScore < computerScore) {
        results.textContent = `Game Over! You Lose! Your score = ${humanScore}, Computer score = ${computerScore}`
    }  
    }
});

/*
TO DO: 
Flesh out UI and make it **Pretty**
Separate score counter from "blank beats blank"
Images to represent human and computer choices
final image to represent winner?
*/