function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice;
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt(
      "Enter your choice: rock, paper, or scissors",
      "Rock",
    ).toLowerCase();
  }
  return choice;
}
