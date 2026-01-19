function yes() {
  document.body.innerHTML = `
    <h1 style="
      color:white;
      text-align:center;
      font-size:clamp(1.5rem, 6vw, 3rem);
      padding:20px;
      max-width:90%;
      margin:auto;
      line-height:1.4;
    ">
      YAYYY I love you sooooo MUCHHH ❤️❤️❤️❤️❤️<br><br>
      I’m sorry I can’t be there with you <br>
      Buttttt were gonna go for a nice dinner togetherrrrr <br>
      I can’t wait to be with you foreverrr.<br><br>
      I miss you so much baby.
    </h1>

    <p id="countdown" style="
      color:white;
      text-align:center;
      font-size:1.2rem;
      margin-top:10px;
      line-height:1.5;
    ">
      💘 Countdown to Valentine’s Day 💘
    </p>

    <div style="
      position:fixed;
      bottom:30px;
      width:100%;
      display:flex;
      justify-content:center;
    ">
      <button onclick="showPasswordPage()" style="
        padding:14px 22px;
        font-size:1.2rem;
        border:none;
        border-radius:12px;
        background:white;
        color:hotpink;
        cursor:pointer;
      ">
        Reveal Secret 💌
      </button>
    </div>
  `;

  startCountdown();
}

function showPasswordPage() {
  document.body.innerHTML = `
    <div style="
      min-height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      padding:20px;
      box-sizing:border-box;
    ">

      <h2 style="
        color:white;
        font-size:2rem;
        margin-bottom:40px;
      ">
        anniversary
      </h2>

      <input 
        id="passwordInput"
        type="password"
        placeholder="Enter password"
        style="
          padding:12px;
          font-size:1rem;
          border-radius:8px;
          border:none;
          text-align:center;
          margin-bottom:20px;
        "
      />

      <button onclick="checkPassword()" style="
        padding:12px 20px;
        font-size:1rem;
        border:none;
        border-radius:10px;
        background:white;
        color:hotpink;
        cursor:pointer;
      ">
        Unlock 🔓
      </button>

    </div>
  `;
}
function checkPassword() {
  const input = document.getElementById("passwordInput");
  const password = input.value;

  const correctPassword = "07092025"; // <-- CHANGE DATE HERE

  if (password === correctPassword) {
    showSecretMessage();
  } else {
    shakeInput(input);
  }
}

function shakeInput(element) {
  element.style.animation = "shake 0.4s";
  element.style.border = "2px solid red";
  element.value = "";

  setTimeout(() => {
    element.style.animation = "";
    element.style.border = "none";
  }, 400);
}

function showSecretMessage() {
  document.body.innerHTML = `
    <h1 style="
      color:white;
      text-align:center;
      font-size:clamp(1.5rem, 6vw, 3rem);
      padding:20px;
      max-width:90%;
      margin:auto;
      line-height:1.4;
    ">
       SECRET MESSAGE <br><br>
      YAYY U FOUND ITT<br><br>
      Diti i dont know where to start.<br>
      You make me the happiest person ever.<br>
      I love spending time with u, i love all our silly jokes<br>
      I love u so much (Even when u bully me)<br><br>
      Thank you for so many things<br>
      Thank u for making me feel better<br>
      Thank u for for being there for me<br>
      Thank u for helping me a better person<br>
      Thank u for being u<br>
      Thank u for everything. <br><br>
      I cant imagine life without you<br>
      Your so perfect and pretty and one day ur gonna admit it<br>
      I love u so much diti.<br>
      ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️<br>
      
    </h1>
  `;
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



function startCountdown() {
  // CHANGE YEAR IF NEEDED
  const valentinesDate = new Date("February 14, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = valentinesDate - now;

    if (distance <= 0) {
      document.getElementById("countdown").innerHTML =
        "❤️ It’s Valentine’s Day ❤️";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      `💘 Countdown to Valentine’s Day 💘<br>
       ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }, 1000);
}
