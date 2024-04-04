const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const port = 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

io.on("connection", (socket) => {
  console.log(socket);
  console.log(socket.id);
});

app.get("/", (req, res) => {
  res.json({ message: "Websocket" });
});

httpServer.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
