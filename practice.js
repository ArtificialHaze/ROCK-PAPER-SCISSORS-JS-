const btns = document.querySelectorAll("button");
const resultElement = document.getElementById("result");
const computerElement = document.getElementById("pc-score");
const userElement = document.getElementById("user-score");

let playerScore = 0;
let pcScore = 0;

const computerPlay = () => {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const playRound = (id, pcPlay) => {
  if (id === pcPlay) {
    return "It is a tie.";
  } else if (
    (id === "rock" && pcPlay === "scissor") ||
    (id === "paper" && pcPlay === "rock") ||
    (id === "scissor" && pcPlay === "paper")
  ) {
    playerScore++;
    userElement.textContent = playerScore;
    return "You have WON! " + id + " beats " + pcPlay;
  } else {
    pcScore++;
    computerElement.textContent = pcScore;
    return "You have lost! " + pcPlay + " beats " + id;
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const result = playRound(btn.id, computerPlay());
    resultElement.textContent = result;
  });
});
