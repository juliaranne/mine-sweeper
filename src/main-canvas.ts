const canvasHeight = 100;
const canvasWidth = 100;
const tileSize = 20;
const tileCount = canvasWidth / tileSize;

const canvas = document.getElementById("app") as HTMLCanvasElement;
const ctx = canvas?.getContext("2d");

function createRow(y: number) {
  for (let i = 0; i < tileCount; i += 1) {
    if (ctx) {
      ctx.fillStyle = "#ccc";
      ctx.fillRect(i * tileSize, y, 20, 20);
      ctx.strokeStyle = "black"; // Optional: Set the stroke color
      ctx.strokeRect(i * tileSize, y, 20, 20);
    }
  }
}

for (let j = 0; j < canvasHeight; j += tileSize) {
  createRow(j);
}

function drawSquare(x: number, y: number) {
  if (ctx) {
    ctx.fillStyle = "#e0e0e0";
    ctx.fillRect(x, y, 20, 20);
    ctx.strokeStyle = "white"; // Optional: Set the stroke color
    ctx.strokeRect(x, y, 20, 20);
  }
}

canvas.addEventListener("mousedown", (e: MouseEvent) => {
  const x = e.offsetX;
  const y = e.offsetY;

  console.log(y - (y % 20), x - (x % 20));
  drawSquare(x - (x % 20), y - (y % 20));

  console.log(x, y);
});
