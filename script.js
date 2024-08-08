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

console.log(getComputerChoice())