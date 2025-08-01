function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const choice = prompt("What is your move?")
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beat Paper");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! Rock beat Scissors");
      computerScore++;
    } else if (computerChoice == "rock" && humanChoice == "paper") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
      console.log("You win! Scissors beat Paper");
      humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
      console.log("You win! Rock beat Scissors");
      humanScore++;
    } else {
      console.log("It's a draw!");
    }
  }

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
  if (humanScore < computerScore) console.log("You lose the game!");
  else if (humanScore > computerScore) console.log("You win the game!");
  else console.log("The game is a draw!");
}

playGame();
