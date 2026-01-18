function yes() {
  document.body.innerHTML =
    "<h1 style='color:white; text-align:center;'>YAYYY  I love you sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo MUCHHH.  Im sorrry i cant be there with uuuuu. I cant wait to be with you foreverrr. I miss u so much baby.</h1>";
}

const noBtn = document.getElementById("noBtn");
let moveCount = 0;

noBtn.addEventListener("mouseover", () => {
  moveCount++;

  // Move the button
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Show popup after 3 moves
  if (moveCount === 3) {
    showPopup();
  } else if (moveCount ===4) {
      showPopupreally();

  }
});

function showPopup() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";

  const popup = document.createElement("div");
  popup.style.background = "white";
  popup.style.padding = "25px";
  popup.style.borderRadius = "15px";
  popup.style.textAlign = "center";
  popup.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";

  popup.innerHTML = `
    <h2 style="color:hotpink;">⚠️ Warning</h2>
    <p style="font-size:18px;">It's not going to work Ditiiiiii 😏</p>
    <button onclick="closePopup()" style="
      margin-top:15px;
      padding:8px 16px;
      border:none;
      border-radius:8px;
      background:hotpink;
      color:white;
      font-size:16px;
      cursor:pointer;">
      fine......
    </button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  window.closePopup = function () {
    document.body.removeChild(overlay);
  };
}




function showPopupreally() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";

  const popup = document.createElement("div");
  popup.style.background = "white";
  popup.style.padding = "25px";
  popup.style.borderRadius = "15px";
  popup.style.textAlign = "center";
  popup.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";

  popup.innerHTML = `
    <h2 style="color:hotpink;">⚠️ Warning</h2>
    <p style="font-size:18px;">bro just say yessssssss u have no choiceeeeee</p>
    <button onclick="closePopup()" style="
      margin-top:15px;
      padding:8px 16px;
      border:none;
      border-radius:8px;
      background:hotpink;
      color:white;
      font-size:16px;
      cursor:pointer;">
      fine i give up
    </button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  window.closePopup = function () {
    document.body.removeChild(overlay);
  };
}
