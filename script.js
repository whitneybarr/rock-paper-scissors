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
    if (choice === "rock" || choice === "Rock") {
        return "rock"
    } else if (choice === "paper" || choice === "Paper") {
        return "paper"
    } else if (choice === "scissors" || choice === "Scissors") {
        return "scissors"
    } else {
        return "Please enter a valid option"
    }
}

console.log(getHumanChoice())