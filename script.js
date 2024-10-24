"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Game logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🛑 No number!");

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too high!" : "📉Too low!");

      score--;

      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥You lost the game!");

      document.querySelector(".number").textContent = secretNumber;

      document.querySelector(".number").style.width = "30rem";

      document.querySelector("body").style.backgroundColor = "red";

      document.querySelector(".score").textContent = 0;
    }
  }
});

// Reset game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  displayMessage("Start guessing...");

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
