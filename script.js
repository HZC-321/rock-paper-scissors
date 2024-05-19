let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let roundNum = 1;
let winner = "";

function generateComputerChoice() {
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


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    winner = "";
  } else {
    const choices = ["rock", "paper", "scissors"];

    let num1 = choices.indexOf(humanChoice) + 1;
    let num2 = choices.indexOf(computerChoice) + 1;

    if (num1 > num2 && !(num1 == 3 && num2 == 1) || num1 == 1 && num2 == 3) {
      winner = "Player";
      humanScore++;
    } else {
      winner = "Computer";
      computerScore++;
    }
  }
}

let btns = document.querySelectorAll("button");

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    if (roundNum == 6) return;
    humanChoice = e.target.textContent.toLowerCase();
    computerChoice = generateComputerChoice();
    playRound(humanChoice, computerChoice);
    roundNum++;
    update();
  });
});

function update() {
  
  let round = document.querySelector("#round");
  let pChoice = document.querySelector("#playerChoice");
  let cChoice = document.querySelector("#computerChoice");
  let pScore = document.querySelector("#playerScore");
  let cScore = document.querySelector("#computerScore");
  let w = document.querySelector(".winner");

  pChoice.textContent = `Player chose: ${humanChoice}`;
  cChoice.textContent = `Computer chose: ${computerChoice}`;
  pScore.textContent = `Player score: ${humanScore}`;
  cScore.textContent = `Computer score: ${computerScore}`;

  if (winner === "") {
    w.textContent = "It's a tie!";
  }
  else {
    w.textContent = `${winner} wins!`;
  }

  if (roundNum < 6) {
    round.textContent = `Round ${roundNum}`;
  }
  else {
    let finalWinner = document.querySelector(".finalWinner");
    let winningStatement = "";
    
    switch (humanScore > computerScore) {
      case true:
        winningStatement = "Player is the winner!";
        break;
      case false:
        if (humanScore === computerScore) {
          winningStatement = "It's a tie!";
        }
        else {
          winningStatement = "Computer is the winner!";
        }
        break;
    }

    let statement = document.createElement("h3");
    statement.textContent = "The game has ended. " + winningStatement;
    finalWinner.appendChild(statement);

  }
}
