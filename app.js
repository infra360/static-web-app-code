function changeMessage() {
  const message = document.getElementById("message");

  const now = new Date();
  message.innerText = `JavaScript is working!
Current time: ${now.toLocaleTimeString()}`;
}

