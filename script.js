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

function getHumanChoice() {
    let choice = prompt('Rock, Paper or Scissors?');
    let validChoice= choice.toLowerCase();
    if (validChoice === "rock") {
        return "rock"
    } else if (validChoice === "paper") {
        return "paper"
    } else if (validChoice === "scissors") {
        return "scissors"
    } else {
        return "Please enter a valid option"
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("Tie! No winner this round.")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore
        console.log("You Lose! Paper beats Rock!")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore
        console.log("You Win! Rock beats Scissors!")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ++computerScore
        console.log("You Lose! Scissors beats Paper!")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore
        console.log("You Win! Paper beats Rock!")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore
        console.log("You Lose! Rock beats Scissors!")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore
        console.log("You Win! Scissors beats Paper!")
    } 
}


playRound()