function yes() {
  document.body.innerHTML = "<h1 style='color:white;'>YAYYY  I love you sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo MUCHHH.  Im sorrry i cant be there with uuuuu</h1>";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
