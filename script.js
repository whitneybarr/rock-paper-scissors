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
        console.log("Please enter a valid option")
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log(`Tie! No winner this round. You: ${humanScore} Computer: ${computerScore}`)
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore
        console.log(`You Lose! Paper beats Rock! You: ${humanScore} Computer: ${computerScore}`)
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore
        console.log(`You Win! Rock beats Scissors! You: ${humanScore} Computer: ${computerScore}`)
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ++computerScore
        console.log(`You Lose! Scissors beats Paper! You: ${humanScore} Computer: ${computerScore}`)
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore
        console.log(`You Win! Paper beats Rock! You: ${humanScore} Computer: ${computerScore}`)
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore
        console.log(`You Lose! Rock beats Scissors! You: ${humanScore} Computer: ${computerScore}`)
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore
        console.log(`You Win! Scissors beats Paper! You: ${humanScore} Computer: ${computerScore}`)
    } 
}
// for (let i = 0; i < 5; i++) {
// playRound() }
// if (humanScore > computerScore) {
//     console.log(`You are the winner! You beat the computer by ${humanScore - computerScore} points!`)
// } else if (humanScore < computerScore) {
//     console.log(`You are the loser! You lost the game by ${computerScore - humanScore} points!`)
// } else if (humanScore === computerScore) {
//     console.log(`It's a tie! You both have ${humanScore} points!`)
// }
playRound()
}

playGame()
