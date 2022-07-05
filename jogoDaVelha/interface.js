document.addEventListener("DOMContentLoaded", () => {

  let blocos = document.getElementsByClassName("bloco");

  blocos.forEach((elemento) => {
    elemento.addEventListener("click", handleClick);
  });

});

function handleClick(event) {
  console.log(event);
}
