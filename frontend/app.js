const socket = io("ws://localhost:3000");
const notificationsList = document.getElementById("notification-list");

socket.on("connect", () => {
  console.log(socket.id);
});

// Listens
socket.on("notification", (message) => {
  const li = document.createElement("li");
  li.innerText = message;
  notificationsList.appendChild(li);
});
