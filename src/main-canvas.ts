const canvasHeight = 120;
const canvasWidth = 120;
const tileSize = 30;
const tileCount = canvasWidth / tileSize;

const canvas = document.getElementById("app") as HTMLCanvasElement;
const ctx = canvas?.getContext("2d");

function createRow(y: number) {
  for (let i = 0; i < tileCount; i += 1) {
    if (ctx) {
      ctx.fillStyle = "#ccc";
      ctx.fillRect(i * tileSize, y, 30, 30);
      ctx.strokeStyle = "black"; // Optional: Set the stroke color
      ctx.strokeRect(i * tileSize, y, 30, 30);
    }
  }
}

for (let j = 0; j < canvasHeight; j += tileSize) {
  createRow(j);
}

function drawSquare(x: number, y: number) {
  if (ctx) {
    ctx.fillStyle = "#e0e0e0";
    ctx.fillRect(x, y, 30, 30);
    ctx.strokeStyle = "white"; // Optional: Set the stroke color
    ctx.strokeRect(x, y, 30, 30);
  }
}

canvas.addEventListener("mousedown", (e: MouseEvent) => {
  const x = e.offsetX;
  const y = e.offsetY;

  console.log(y - (y % 30), x - (x % 30));
  drawSquare(x - (x % 30), y - (y % 30));

  console.log(x, y);
});

function setBombLocation(x: number, y: number) {
  if (ctx) {
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, 2 * Math.PI, false);
    ctx.fillStyle = "green";
    ctx.fill();
  }
}

setBombLocation(15, 15);

// have sets of bomb coordinates, see if hit matches
// have array of square coordinates? run through, count bombs
