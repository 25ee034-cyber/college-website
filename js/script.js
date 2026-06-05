console.log("Portfolio website loaded successfully");

// =========================
// CHATBOT ELEMENTS
// =========================

const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");

// =========================
// OPEN / CLOSE CHATBOT
// =========================

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

// =========================
// PREVENT CLOSE INSIDE CHAT
// =========================

chatBox.addEventListener("click", (e) => {
  e.stopPropagation();
});

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
    <div class="bot-msg">${answer}</div>
  `;

  messages.scrollTop = messages.scrollHeight;

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

const userInput =
  document.getElementById("userInput");

if (userInput) {

  userInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

      sendMessage();

    }

  });

}

// =========================
// CLICK OUTSIDE = CLOSE
// =========================

document.addEventListener("click", function() {

  chatBox.style.display = "none";

});

// =========================
// ESC KEY = CLOSE
// =========================

document.addEventListener("keydown", function(e) {

  if (e.key === "Escape") {

    chatBox.style.display = "none";

  }

});