let userScore = 0;
let computerScore = 0;

const moves = document.querySelectorAll(".move");
const msg = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#computer-score");

const genCompMove = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  msg.innerText = `It's a draw. Try again!`;
};

const showWinner = (userWin, userMove, compMove) => {
  if (userWin) {
    userScore++;
    userScoreP.innerText = userScore;
    msg.innerText = `You win! Your ${userMove} beats ${compMove}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compScoreP.innerText = computerScore;
    msg.innerText = `You Lose! ${compMove} beats your ${userMove}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userMove) => {
  const compMove = genCompMove();

  if (userMove === compMove) {
    drawGame();
  } else {
    let userWin = true;
    if (userMove === "rock") {
      userWin = compMove === "paper" ? false : true;
    } else if (userMove === "paper") {
      userWin = compMove === "scissors" ? false : true;
    } else {
      userWin = compMove === "rock" ? false : true;
    }
    showWinner(userWin, userMove, compMove);
  }
};

moves.forEach((move) => {
  move.addEventListener("click", () => {
    const userMove = move.getAttribute("id");
    playGame(userMove);
  });
});
