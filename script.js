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
let humanScore = 0;
let computerScore = 0;
let gameCard = document.querySelector(".gameCard");
let startBtn = document.querySelector("#startBtn"); 
let title = document.querySelector("#title");
let round = 1
let roundBanner = document.createElement("h2")
roundBanner.setAttribute("id", "round")
roundBanner.textContent = `Good Luck!`
let scoreBanner = document.createElement("div");
scoreBanner.setAttribute("id", "scoreBanner");
let hDisplayScore = document.createElement("p");
let cDisplayScore = document.createElement("p");
hDisplayScore.setAttribute("class", "score");
cDisplayScore.setAttribute("class", "score");
hDisplayScore.innerText = `You: ${humanScore}`;
cDisplayScore.innerText = `Computer: ${computerScore}`
scoreBanner.appendChild(hDisplayScore);
scoreBanner.appendChild(cDisplayScore);
let battleSpace = document.createElement("div");
battleSpace.setAttribute("id", "battleSpace")
let hBattleChoice = document.createElement("div");
let cBattleChoice = document.createElement("div")
hBattleChoice.setAttribute("class", "battleChoice")
cBattleChoice.setAttribute("class", "battleChoice")
battleSpace.appendChild(hBattleChoice);
battleSpace.appendChild(cBattleChoice);
let battleText = document.createElement("h2")
battleText.setAttribute("id", "battleText")
battleText.innerText = ``
let chooseWeapon = document.createElement("p")
chooseWeapon.setAttribute("id", "chooseWeapon")
chooseWeapon.textContent = `Choose your weapon:`
let rpsChoices = document.createElement("div")
rpsChoices.setAttribute("id", "rpsChoices")
let rock = document.createElement("button")
rock.setAttribute("id", "rock")
rock.innerText = `Rock`
let paper = document.createElement("button")
paper.setAttribute("id", "paper")
paper.innerText = `Paper`
let scissors = document.createElement("button")
scissors.setAttribute("id", "scissors")
scissors.innerText = `Scissors`
rpsChoices.appendChild(rock)
rpsChoices.appendChild(paper)
rpsChoices.appendChild(scissors)

startBtn.addEventListener("click", () => {
    gameCard.removeChild(title)
    gameCard.removeChild(startBtn) 
    gameCard.appendChild(chooseWeapon)
    gameCard.appendChild(rpsChoices)
})

function playRound(humanChoice, computerChoice) {
    gameCard.insertBefore(roundBanner,chooseWeapon)
    gameCard.insertBefore(scoreBanner,chooseWeapon)
    gameCard.insertBefore(battleSpace, chooseWeapon)
    gameCard.insertBefore(battleText, chooseWeapon)
    if (round === 9) {
        roundBanner.textContent = `Final Round`
    }  else if (round === 10) {
        endScreen()
    } else {
        roundBanner.textContent= `Round: ${round}`
    }
    if (humanChoice === computerChoice) {
        battleText.textContent = `Tie! No winner this round.`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore
        battleText.textContent = `Paper beats Rock!`
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore
        battleText.textContent = `Rock beats Scissors!`
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ++computerScore
        battleText.textContent = `Scissors beats Paper!`
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore
        battleText.textContent = `Paper beats Rock!`
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore
        battleText.textContent = `Rock beats Scissors!`
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore
        battleText.textContent = `Scissors beats Paper!`
    } 
    ++round
    hDisplayScore.innerText = `You: ${humanScore}`;
    cDisplayScore.innerText = `Computer: ${computerScore}`
    // roundBanner.innerText = `Round: ${round}`
}
let hRockImg = document.createElement("img")
hRockImg.setAttribute("src", "images/humRock.png")
hRockImg.setAttribute("alt", "Rock")
hRockImg.setAttribute("class", "choiceImg")

let hPaperImg = document.createElement("img")
hPaperImg.setAttribute("src", "images/humPaper.png")
hPaperImg.setAttribute("alt", "Paper")
hPaperImg.setAttribute("class", "choiceImg")

let hScissorsImg = document.createElement("img")
hScissorsImg.setAttribute("src", "images/humScissors.png")
hScissorsImg.setAttribute("alt", "Scissors")
hScissorsImg.setAttribute("class", "choiceImg")

let cRockImg = document.createElement("img")
cRockImg.setAttribute("src", "images/compRock.png")
cRockImg.setAttribute("alt", "Rock")
cRockImg.setAttribute("class", "choiceImg")

let cPaperImg = document.createElement("img")
cPaperImg.setAttribute("src", "images/compPaper.png")
cPaperImg.setAttribute("alt", "Paper")
cPaperImg.setAttribute("class", "choiceImg")

let cScissorsImg = document.createElement("img")
cScissorsImg.setAttribute("src", "images/compScissors.png")
cScissorsImg.setAttribute("alt", "Scissors")
cScissorsImg.setAttribute("class", "choiceImg")

rpsChoices.addEventListener("click", (e) => {
    if (hBattleChoice.contains(hRockImg)){
     hBattleChoice.removeChild(hRockImg)
    } else if (hBattleChoice.contains(hPaperImg)){
     hBattleChoice.removeChild(hPaperImg)
    } else if (hBattleChoice.contains(hScissorsImg)) {
     hBattleChoice.removeChild(hScissorsImg)
    }
    if (cBattleChoice.contains(cRockImg)){
        cBattleChoice.removeChild(cRockImg)
       } else if (cBattleChoice.contains(cPaperImg)){
        cBattleChoice.removeChild(cPaperImg)
       } else if (cBattleChoice.contains(cScissorsImg)) {
        cBattleChoice.removeChild(cScissorsImg)
       }
    let target = e.target;
    let humanChoice;
    let computerChoice = getComputerChoice();
    if (target.id === "rock") {
         humanChoice = "rock"
    } else if (target.id === "paper") {
         humanChoice = "paper"
    } else if (target.id === "scissors") {
         humanChoice = "scissors"
     }
   playRound(humanChoice, computerChoice);
    if (humanChoice === "rock") {
   hBattleChoice.appendChild(hRockImg)
} else if (humanChoice === "paper") {
    hBattleChoice.appendChild(hPaperImg)
} else if (humanChoice === "scissors") {
    hBattleChoice.appendChild(hScissorsImg)
}
    if (computerChoice === "rock") {
    cBattleChoice.appendChild(cRockImg)
 } else if (computerChoice === "paper") {
     cBattleChoice.appendChild(cPaperImg)
 } else if (computerChoice === "scissors") {
     cBattleChoice.appendChild(cScissorsImg)
 }
});


let winImg = document.createElement("img")
winImg.setAttribute("src", "images/win.png")
winImg.setAttribute("alt", "Trophy")
winImg.setAttribute("class", "endImg")

let loseImg = document.createElement("img")
loseImg.setAttribute("src", "images/lose.png")
loseImg.setAttribute("alt", "Skull and Crossbones")
loseImg.setAttribute("class", "endImg")

let tieImg = document.createElement("img")
tieImg.setAttribute("src", "images/tie.png")
tieImg.setAttribute("alt", "Infinity Symbol")
tieImg.setAttribute("class", "endImg")

function endScreen() {
    gameCard.removeChild(roundBanner)
    gameCard.removeChild(scoreBanner)
    gameCard.removeChild(chooseWeapon)
    gameCard.removeChild(rpsChoices)
    gameCard.removeChild(battleSpace)
    let winText = document.createElement("h1")
    winText.setAttribute("id", "endH1")
    let endImgDiv = document.createElement("div")
    endImgDiv.setAttribute("id","endImgDiv")
    gameCard.appendChild(winText)
    gameCard.appendChild(endImgDiv)
    let finalScore = document.createElement("p")
    finalScore.setAttribute("id", "finalScore")
    finalScore.textContent = `Final Score:`
    gameCard.appendChild(finalScore)
    gameCard.appendChild(scoreBanner)
    let startBtn = document.createElement("button")
    startBtn.textContent = "Play Again?"
    gameCard.appendChild(startBtn)
    if (humanScore > computerScore) {
        winText.textContent = "You Win!"
        endImgDiv.appendChild(winImg)
     } else if (humanScore < computerScore) {
        winText.textContent = "You Lose!"
        endImgDiv.appendChild(loseImg)
     } else if (humanScore === computerScore) {
        winText.textContent = "It's a Tie!"
        endImgDiv.appendChild(tieImg)
     }
     startBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        round = 1;
        gameCard.removeChild(winText)
        gameCard.removeChild(endImgDiv)
        gameCard.removeChild(finalScore)
        gameCard.removeChild(scoreBanner)
        gameCard.removeChild(startBtn)
        gameCard.removeChild(battleText)
        gameCard.appendChild(chooseWeapon)
        gameCard.appendChild(rpsChoices)
    });
}