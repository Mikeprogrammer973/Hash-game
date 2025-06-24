import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static("public"));

let waitingPlayer = null;

io.on("connection", (socket) => {
  console.log("Novo jogador conectado:", socket.id);

  if (waitingPlayer) {
    const roomId = socket.id + "#" + waitingPlayer.id;
    socket.join(roomId);
    waitingPlayer.join(roomId);

    // Inform both players, assign their symbols individually
    socket.emit("startGame", { roomId, symbol: "O" });
    waitingPlayer.emit("startGame", { roomId, symbol: "X" });

    // Reset the queue
    waitingPlayer = null;
  } else {
    waitingPlayer = socket;
    socket.emit("waiting");
  }

  socket.on("makeMove", ({ roomId, index, symbol }) => {
    socket.to(roomId).emit("opponentMove", { index, symbol });
  });

  socket.on("disconnect", () => {
    console.log("Jogador desconectado:", socket.id);
    if (waitingPlayer === socket) {
      waitingPlayer = null;
    }
  });
});

httpServer.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
