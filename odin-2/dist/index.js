"use strict";
var options = ["rock", "paper", "scissors"];
var GameResult;
(function (GameResult) {
    GameResult[GameResult["draw"] = 0] = "draw";
    GameResult[GameResult["player"] = 1] = "player";
    GameResult[GameResult["computer"] = 2] = "computer";
})(GameResult || (GameResult = {}));
var playerScore = 0;
var computerScore = 0;
var gameInfoBox = document.querySelector(".game-info-text");
var rockBtn = document.querySelector(".rock");
var paperkBtn = document.querySelector(".paper");
var scissorsBtn = document.querySelector(".scissors");
var computerScoreField = document.querySelector(".computer-score");
var playerScoreField = document.querySelector(".player-score");
rockBtn.addEventListener("click", function () { return game("rock"); });
paperkBtn.addEventListener("click", function () { return game("paper"); });
scissorsBtn.addEventListener("click", function () { return game("scissors"); });
gameInfoBox.innerHTML = "Your choice!";
function computerPlay() {
    var randomNumber = Math.ceil(Math.random() * 3) - 1;
    return options[randomNumber];
}
function getResult(playerSelection, computerSelection) {
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
function game(playerSelection) {
    var computerSelection = computerPlay();
    var result = getResult(playerSelection, computerSelection);
    switch (result) {
        case GameResult.player:
            gameInfoBox.innerHTML = "player win";
            playerScore++;
            break;
        case GameResult.computer:
            gameInfoBox.innerHTML = "computer win";
            computerScore++;
            break;
        case GameResult.draw:
            gameInfoBox.innerHTML = "draw";
            break;
    }
    computerScoreField.innerHTML = computerScore.toString();
    playerScoreField.innerHTML = playerScore.toString();
}
