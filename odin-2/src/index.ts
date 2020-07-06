
const options: Array<string> = ["rock", "paper", "scissors"];

enum GameResult {
    draw,
    player,
    computer
}

let playerScore = 0;
let computerScore = 0;

const gameInfoBox = document.querySelector(".game-info-text")!;
const rockBtn = document.querySelector(".rock")!;
const paperkBtn = document.querySelector(".paper")!;
const scissorsBtn = document.querySelector(".scissors")!;
const computerScoreField = document.querySelector(".computer-score")!;
const playerScoreField = document.querySelector(".player-score")!;


rockBtn.addEventListener("click", () => game("rock"));
paperkBtn.addEventListener("click", () => game("paper"));
scissorsBtn.addEventListener("click", () => game("scissors"));

gameInfoBox.innerHTML = "Your choice!";


function computerPlay(): string {
    let randomNumber = Math.ceil(Math.random()*3) - 1;
    return options[randomNumber];
}


function getResult(playerSelection: string, computerSelection: string) {
    switch (true) {
        case playerSelection === computerSelection:
            return GameResult.draw;

        case playerSelection === "rock" && computerSelection === "paper":
            return GameResult.computer;

        case playerSelection === "rock" && computerSelection === "scissors":
            return GameResult.player;


        case playerSelection === "paper" && computerSelection === "rock":
            return GameResult.player;

        case playerSelection === "paper" && computerSelection === "scissors":
            return GameResult.computer;


        case playerSelection === "scissors" && computerSelection === "rock":
            return GameResult.computer;

        case playerSelection === "scissors" && computerSelection === "paper":
            return GameResult.player;

        default:
            break;
    }
}


function game(playerSelection: string): void {
    const computerSelection = computerPlay()
    let result = getResult(playerSelection, computerSelection);
    switch (result) {
        case GameResult.player:
            gameInfoBox.innerHTML = `player win`;
            playerScore++;
            break;

        case GameResult.computer:
            gameInfoBox.innerHTML = `computer win`;
            computerScore++;
            break;

        case GameResult.draw:
            gameInfoBox.innerHTML = `draw`;
            break;
    }
    computerScoreField.innerHTML = computerScore.toString();
    playerScoreField.innerHTML = playerScore.toString();
}
