"use strict";

let newScore = 0;

// generates random number from 0 to 20
var randomNum = Math.floor(Math.random() * 20) + 1;

let displayMsg = function (msgText) {
  document.querySelector(".message").textContent = msgText;
};
function guessTheNumber() {
  let guessNum = Number(document.querySelector(".guess").value);

  if (guessNum !== randomNum) {
    displayMsg(guessNum > randomNum ? "Too high" : "Too low");

    let score = Number(document.querySelector(".score").textContent);
    newScore = score - 1;
    document.querySelector(".score").textContent = newScore;

    if (newScore < 1) {
      displayMsg("You lost the game!");
    }
  } else {
    let score = Number(document.querySelector(".score").textContent);

    displayMsg("Correct Number");
    document.querySelector("body").style = "background-color: #60b347";

    if (score > newScore) {
      document.querySelector(".highscore").textContent = score;
    } else {
      document.querySelector(".highscore").textContent = newScore;
    }
    document.querySelector(".number").textContent = randomNum;
  }
}

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  displayMsg("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".highscore").textContent = newScore;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style = "background-color: #222";
  randomNum = Math.floor(Math.random() * 20) + 1;
});
