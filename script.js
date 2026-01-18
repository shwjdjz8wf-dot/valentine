function yes() {
  document.body.innerHTML =
    "<h1 style='color:white; text-align:center;'>YAYYY  I love you sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo MUCHHH.  Im sorrry i cant be there with uuuuu. I cant wait to be with you foreverrr. I miss u so much baby.</h1>";
}

const noBtn = document.getElementById("noBtn");
let moveCount = 0; // count how many times it moves

noBtn.addEventListener("mouseover", () => {
  moveCount++;

  // Move the button
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // After 3 moves, show warning
  if (moveCount === 3) {
    showWarning();
  }
});

function showWarning() {
  const warning = document.createElement("p");
  warning.innerText = " Nice try Diti it's not gonnaaa to work...😉";
  warning.style.color = "hotpink";
  warning.style.fontSize = "20px";
  warning.style.marginTop = "20px";

  document.querySelector(".card").appendChild(warning);
}
