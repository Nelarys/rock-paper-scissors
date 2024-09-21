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
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice == "rock" && computerChoice === "scissors") ||
    (humanChoice == "paper" && computerChoice === "rock") ||
    (humanChoice == "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  console.log(`Human: ${humanScore} Computer: ${computerScore}`);
}
