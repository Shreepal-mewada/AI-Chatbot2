const container = document.querySelector(".chat-area");
const input = document.querySelector("#inp");
const button = document.querySelector("button");



const initialBotMsg = document.createElement("div");
initialBotMsg.classList.add("bottext");
initialBotMsg.innerHTML = `
  <img src="images/Graident Ai Robot.jpg" class="shreeai" alt="">
  <span>Hello! How can I help you today?</span>
`;
container.appendChild(initialBotMsg);


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    sendUserMessage(input.value);
  }
});

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    sendUserMessage(input.value);
  }
});

function sendUserMessage(msg) {
  const userMsg = document.createElement("div");
  userMsg.classList.add("usertext");
  userMsg.innerHTML = `
    <img src="images/user.png" class="shreeus" alt="">
    <span>${msg}</span>
  `;
  container.appendChild(userMsg);
  container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  input.value = "";
  callBotAPI(msg);
}

async function callBotAPI(userInput) {
  const botReply = document.createElement("div");
  botReply.classList.add("bottext");
  botReply.innerHTML = `
    <img src="images/Graident Ai Robot.jpg" class="shreeai" alt="">
    <img src="images/load-38_256.gif" width="24" height="24" alt="loading" />
  `;
  container.appendChild(botReply);
  container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });

  const api_url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB656P_SRsENUnSSxAW-kgCCbJJB1rQwxs";

  const res = await fetch(api_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: userInput }] }],
    }),
  });

  const data = await res.json();
  const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn’t get that.";

  botReply.innerHTML = `
    <img src="images/Graident Ai Robot.jpg" class="shreeai" alt="">
    <span>${replyText}</span>
  `;
  container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
}
