document.addEventListener("DOMContentLoaded", () => {
  let blocos = document.querySelectorAll(".bloco");

  blocos.forEach((elemento) => {
    elemento.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  console.log(event.target);

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout (() => {
      alert("O jogo Acabou !! - O vencedor foi " + playerTime)
    }, 10)
  }
  updateSquares()
}

function updateSquares() {
  let blocos = document.querySelectorAll(".bloco");

  blocos.forEach((square) => {
    let position = square.id;
    let symbols = board[position];

    if (symbols != "") {
      square.innerHTML = `<div class = "${symbols}"></div>`
    }
  });
}


let btn = document.getElementById("btn");
btn.addEventListener("click", reiniciar);
function reiniciar() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;

  console.log("foi");
}