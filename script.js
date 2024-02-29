"use strict";

// CHOOSE ELEMENT
const picks = ["Rock", "Paper", "Scissors"];
let game = true;

let overlay = document.querySelector(".overlay");
let winner = document.querySelector(".winner");
overlay.style.display = "none";

const pickChoice = document.querySelectorAll("#pick-battle");
const rockEl = document.querySelector(".rock");
const scissorEl = document.querySelector(".scissor");
const paperEl = document.querySelector(".paper");
const guideEl = document.querySelector(".guide");
const resetEl = document.querySelector(".restart");
const againEl = document.querySelector(".repick");

const pickImg = document.querySelector(".picks");
const pickUser = document.querySelector(".pick--user");
const chosenPickUser = document.querySelector(".chosen-pick-user");
const chosenPickBot = document.querySelector(".chosen-pick-bot");
const pickBot = document.querySelector(".pick--bot");

const chooseUser = document.querySelector(".player-choose");
const chooseBot = document.querySelector(".bot-choose");

// SCORES
let scoreUser = document.querySelector(".score--user");
let scoreBot = document.querySelector(".score--bot");

scoreUser.textContent = 0;
scoreBot.textContent = 0;
let currentScore = [0, 0];
chooseUser.style.display = "none";
chooseBot.style.display = "none";

// RESULT
const resultEl = document.querySelector(".result");
const userWinner = document.querySelector(".announce-winner-user");
const botWinner = document.querySelector(".announce-winner-bot");
const getWinnerUser = document.querySelector(".get-winner-user");
const getWinnerBot = document.querySelector(".get-winner-bot");

const resultFunc = () => {
  pickBot.classList.remove("hidden");

  pickBot.classList.remove("hidden");
  chooseBot.style.display = "block";
  userWinner.classList.remove("hidden");
  botWinner.classList.remove("hidden");
};

const againFunc = () => {
  pickUser.classList.add("hidden");
  pickBot.classList.add("hidden");
  userWinner.classList.add("hidden");
  botWinner.classList.add("hidden");
  chooseUser.style.display = "none";
  chooseBot.style.display = "none";

  game = true;
};

const Userchoices = () => {
  pickUser.classList.remove("hidden");
  chooseUser.style.display = "block";
  guideEl.style.display = "none";
};

let userPick = "";

//ROCK

rockEl.addEventListener("click", () => {
  if (game) {
    pickImg.src = "pick--0.jpg";
    userPick = "Rock";
    Userchoices();

    chosenPickUser.textContent = "Rock!";
  }
});

// PAPER
paperEl.addEventListener("click", () => {
  if (game) {
    pickImg.src = "pick--1.jpg";
    userPick = "Paper";
    Userchoices();
    chosenPickUser.textContent = "Paper!";
  }
});

// SCISSOR

scissorEl.addEventListener("click", () => {
  if (game) {
    pickImg.src = "pick--2.jpg";
    userPick = "Scissors";
    Userchoices();
    chosenPickUser.textContent = "Scissor!";
  }
});

// WHOLE LOGIC OF THE GAME

resultEl.addEventListener("click", function () {
  let random = Math.trunc(Math.random() * 3);
  let randomArr = picks[random];
  if (game) {
    game = false;
    if (randomArr === "Rock") {
      chosenPickBot.textContent = "Rock!";
    } else if (randomArr === "Paper") {
      chosenPickBot.textContent = "Paper!";
    } else {
      chosenPickBot.textContent = "Scissors!";
    }

    if (randomArr === userPick) {
      pickBot.src = `pick--${random}.jpg`;
      getWinnerUser.textContent = "Tie!";
      getWinnerBot.textContent = "Tie!";
    } else if (userPick === picks[0] && randomArr === "Scissors") {
      pickBot.src = `pick--${random}.jpg`;
      getWinnerUser.textContent = "Win!";
      getWinnerBot.textContent = "Lose!";
      currentScore[0]++;

      scoreUser.textContent = currentScore[0];
    } else if (userPick === picks[0] && randomArr === "Paper") {
      pickBot.src = `pick--${random}.jpg`;
      getWinnerUser.textContent = "Lose!";
      getWinnerBot.textContent = "Win!";
      currentScore[1]++;

      scoreBot.textContent = currentScore[1];
    } else if (userPick === picks[1] && randomArr === "Rock") {
      pickBot.src = `pick--${random}.jpg`;
      getWinnerUser.textContent = "Win!";
      getWinnerBot.textContent = "Lose!";
      currentScore[0]++;
      scoreUser.textContent = currentScore[0];
    } else if (userPick === picks[1] && randomArr === "Scissors") {
      pickBot.src = `pick--${random}.jpg`;
      getWinnerUser.textContent = "Lose!";
      getWinnerBot.textContent = "Win!";
      currentScore[1]++;
      scoreBot.textContent = currentScore[1];
    } else if (userPick === picks[2] && randomArr === "Paper") {
      pickBot.src = `pick--${random}.jpg`;
      getWinnerUser.textContent = "Win!";
      getWinnerBot.textContent = "Lose!";
      currentScore[0]++;
      scoreUser.textContent = currentScore[0];
    } else if (userPick === picks[2] && randomArr === "Rock") {
      pickBot.src = `pick--${random}.jpg`;
      getWinnerUser.textContent = "Lose!";
      getWinnerBot.textContent = "Win!";
      currentScore[1]++;
      scoreBot.textContent = currentScore[1];
    }
    resultFunc();
  }
  if (currentScore[0] >= 5) {
    overlay.style.display = "grid";
  } else if (currentScore[1] >= 5) {
    overlay.style.display = "grid";
    winner.textContent = "Bot";
  }
  console.log(randomArr);
});

// AGAIN OR PICK AGAIN
againEl.addEventListener("click", againFunc);

// RESET THE SCORES THIS WILL APPEAR WHEN BOT OR USER HIT 5PTS
resetEl.addEventListener("click", () => {
  againFunc();
  guideEl.style.display = "block";
  overlay.style.display = "none";
  currentScore = [0, 0];

  scoreUser.textContent = currentScore[0];
  scoreBot.textContent = currentScore[1];
});
