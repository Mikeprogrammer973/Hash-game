const socket = io();
let symbol = "";
let myTurn = false;
let roomId = "";
const status = document.getElementById("status");
const board = document.getElementById("board");

// Criar tabuleiro 3x3 por padrão
const size = 3;
let cells = [];

function createBoard() {
  board.innerHTML = "";
  cells = [];
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleMove);
    board.appendChild(cell);
    cells.push(cell);
  }
}

function handleMove(e) {
  if (!myTurn) return;
  const index = e.target.dataset.index;
  if (cells[index].textContent !== "") return;

  cells[index].textContent = symbol;
  socket.emit("makeMove", { roomId, index, symbol });
  myTurn = false;
  updateStatus("Aguardando o oponente...");
}

function updateStatus(msg) {
  status.textContent = msg;
}

socket.on("waiting", () => {
  updateStatus("Aguardando outro jogador...");
});

socket.on("startGame", (data) => {
  roomId = data.roomId;
  symbol = data.symbol;
  myTurn = symbol === "X"; // X começa
  createBoard();
  updateStatus(myTurn ? "Sua vez!" : "Vez do oponente");
});

socket.on("opponentMove", ({ index, symbol: opponentSymbol }) => {
  cells[index].textContent = opponentSymbol;
  myTurn = true;
  updateStatus("Sua vez!");
});
