// Iniciar minhas variaveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;
let symbols = ["x", "o"];

function handleMove(position) {
  if (gameOver) {
    return;
  }
  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();
    if (gameOver == false) {
      if (playerTime == 0) {
        playerTime = 1;
      } else {
        playerTime = 0;
      }
    }
  }
  return gameOver;
}

function isWin() {
  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  for (let i = 0; i < winStates.length; i++) {
    let sequences = winStates[i];

    let pos0 = sequences[0];
    let pos1 = sequences[1];
    let pos2 = sequences[2];

    if (
      board[pos0] == board[pos1] &&
      board[pos0] == board[pos2] &&
      board[pos0] != ""
    ) {
      return true;
    }
  }
  return false;
}


