console.log("Portfolio website loaded successfully");

// =========================
// CHATBOT ELEMENTS
// =========================

const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("userInput");

// =========================
// OPEN / CLOSE CHATBOT
// =========================

if (chatBtn && chatBox) {

  chatBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    chatBox.style.display =
      chatBox.style.display === "flex"
        ? "none"
        : "flex";

    const orb = document.querySelector(".ai-orb");

    if (orb) {

      orb.classList.add("clicked");

      setTimeout(() => {
        orb.classList.remove("clicked");
      }, 500);

    }

  });

  chatBox.addEventListener("click", (e) => {
    e.stopPropagation();
  });

}

// =========================
// CHAT HISTORY RESTORE
// =========================

window.addEventListener("load", () => {

  const savedChat =
    localStorage.getItem("dhruvilChat");

  if (
    savedChat &&
    document.getElementById("chat-messages")
  ) {

    document.getElementById(
      "chat-messages"
    ).innerHTML = savedChat;

  }

});

// =========================
// SAVE CHAT
// =========================

function saveChat() {

  const messages =
    document.getElementById("chat-messages");

  if (messages) {

    localStorage.setItem(
      "dhruvilChat",
      messages.innerHTML
    );

  }

}

// =========================
// PREDEFINED QUESTIONS
// =========================

function askQuestion(type) {

  const messages =
    document.getElementById("chat-messages");

  let answer = "";

  if (type === "about") {

    answer =
      "👋 I am Dhruvil Patel, an Electrical Engineering student.";

  }

  else if (type === "skills") {

    answer =
      "⚡ HTML, CSS, JavaScript, C++, Electrical Engineering.";

  }

  else if (type === "projects") {

    answer =
      "🚀 Portfolio Website, College Website and more projects.";

  }

  else if (type === "contact") {

    answer =
      "📱 Contact me through WhatsApp or Email.";

  }

  messages.innerHTML += `
    <div class="bot-msg">
      ${answer}
    </div>
  `;

  messages.scrollTop =
    messages.scrollHeight;

  saveChat();

}

// =========================
// CUSTOM QUESTION
// =========================

function sendMessage() {

  const input =
    document.getElementById("userInput");

  const text =
    input.value.trim();

  if (text === "") return;

  const messages =
    document.getElementById("chat-messages");

  messages.innerHTML += `
    <div class="bot-msg">
      📨 Redirecting to WhatsApp...
    </div>
  `;

  saveChat();

  const msg =
`👋 Hello Dhruvil,

I have a question about your portfolio:

${text}`;

  window.open(
    "https://wa.me/919586920797?text=" +
    encodeURIComponent(msg),
    "_blank"
  );

  input.value = "";

}

// =========================
// ENTER KEY SUPPORT
// =========================

if (userInput) {

  userInput.addEventListener(
    "keypress",
    function(e) {

      if (e.key === "Enter") {

        sendMessage();

      }

    }
  );

}

// =========================
// CLICK OUTSIDE = CLOSE
// =========================

document.addEventListener(
  "click",
  function() {

    if (chatBox) {

      chatBox.style.display = "none";

    }

  }
);

// =========================
// ESC KEY = CLOSE
// =========================

document.addEventListener(
  "keydown",
  function(e) {

    if (
      e.key === "Escape" &&
      chatBox
    ) {

      chatBox.style.display =
        "none";

    }

  }
);

// =========================
// CLEAR CHAT FUNCTION
// =========================

function clearChat() {

  localStorage.removeItem(
    "dhruvilChat"
  );

  const messages =
    document.getElementById(
      "chat-messages"
    );

  if (messages) {

    messages.innerHTML = `
      <div class="bot-msg">
        Hello! Choose an option 👇
      </div>

      <button onclick="askQuestion('about')">
        About Me
      </button>

      <button onclick="askQuestion('skills')">
        Skills
      </button>

      <button onclick="askQuestion('projects')">
        Projects
      </button>

      <button onclick="askQuestion('contact')">
        Contact
      </button>
    `;

  }

}
// =========================
// VISITOR COUNTER
// =========================

fetch("https://api.countapi.xyz/hit/dhruvilpatel2008.github.io/portfolio")
.then(res => res.json())
.then(data => {

  const counter =
  document.getElementById("visitor-count");

  if(counter){

    counter.textContent =
    data.value;

  }

});

// =========================
// COUNTRY DETECTION
// =========================

fetch("https://ipapi.co/json/")
.then(res => res.json())
.then(data => {

  const country =
  document.getElementById("visitor-country");

  if(country){

    country.textContent =
    data.country_name;

  }

});