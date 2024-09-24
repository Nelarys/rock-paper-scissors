let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice;
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Enter your choice: rock, paper, or scissors", "Rock");
    if (choice === null) continue;
    choice = choice.toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  const resultContainer = document.querySelector("#result");
  const scoreContainer = document.querySelector("#score");

  if (humanChoice === computerChoice) {
    resultContainer.textContent = "It's a tie!";
  } else if (
    (humanChoice == "rock" && computerChoice === "scissors") ||
    (humanChoice == "paper" && computerChoice === "rock") ||
    (humanChoice == "scissors" && computerChoice === "paper")
  ) {
    resultContainer.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    resultContainer.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  scoreContainer.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const gameFinishedEvent = new CustomEvent("gameFinished");
    document.dispatchEvent(gameFinishedEvent);
  }
}

document.addEventListener("click", function (e) {
  const computerChoice = getComputerChoice();
  const humanChoice = e.target.id;
  playRound(humanChoice, computerChoice);
});

document.addEventListener("gameFinished", function () {
  const resultContainer = document.querySelector("#result");
  resultContainer.textContent = humanScore === 5 ? "You win!" : "You lose!";
});
