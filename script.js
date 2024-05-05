let humanScore = 0;
let computerScore = 0;

function computerChoice() {
  let randomNum = 0;
  while (randomNum === 0) {
    randomNum = Math.random();
  }

  if (randomNum > 0 && randomNum <= 0.33) {
    return "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function humanChoice() {
  return prompt("Rock, Paper, or Scissors?").toLowerCase().trim();
}

function playRound(humanChoice, computerChoice) {
  console.log("You chose " + humanChoice);
  console.log("Computer chose " + computerChoice);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    const choices = ["rock", "paper", "scissors"];

    let num1 = choices.indexOf(humanChoice) + 1;
    let num2 = choices.indexOf(computerChoice) + 1;

    if (num1 > num2 || num1 == 1 && num2 == 3) {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("Computer wins!");
      computerScore++;
    }
  }
  console.log(`Your score: ${humanScore}`); // backtick
  console.log(`Computer score: ${computerScore}`);
  console.log("");
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const human = humanChoice();
    const computer = computerChoice();
    playRound(human, computer);
  }
}

playGame();
