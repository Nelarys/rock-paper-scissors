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
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.group(`Round ${i + 1}`);
    playRound(humanChoice, computerChoice);
    console.groupEnd();
  }

  if (humanScore > computerScore) {
    console.log("YOU WIN THE GAME!");
  } else if (humanScore < computerScore) {
    console.log("GAME OVER!");
  } else {
    console.log("IT'S A TIE!");
  }
}

document.addEventListener("click", function (e) {
  const computerChoice = getComputerChoice();
  const humanChoice = e.target.id;
  playRound(humanChoice, computerChoice);
});
