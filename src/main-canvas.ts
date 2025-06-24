const canvasHeight = 120;
const canvasWidth = 120;
const tileSize = 30;
const tileCount = canvasWidth / tileSize;
const blockPos: string[] = [];
const bombLocation: string[] = ["30,0", "30,60"];

const canvas = document.getElementById("app") as HTMLCanvasElement;
const ctx = canvas?.getContext("2d");

function createRow(y: number) {
  for (let i = 0; i < tileCount; i += 1) {
    if (ctx) {
      ctx.fillStyle = "#ccc";
      ctx.fillRect(i * tileSize, y, 30, 30);
      ctx.strokeStyle = "black"; // Optional: Set the stroke color
      ctx.strokeRect(i * tileSize, y, 30, 30);
      blockPos.push(`${i * tileSize},${y}`);
    }
  }
}

for (let j = 0; j < canvasHeight; j += tileSize) {
  createRow(j);
}

console.log(blockPos);

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

  console.log(x - (x % 30), y - (y % 30));
  drawSquare(x - (x % 30), y - (y % 30));

  // console.log(x, y);
});

function setBombLocation(x: number, y: number) {
  if (ctx) {
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, 2 * Math.PI, false);
    ctx.fillStyle = "green";
    ctx.fill();
  }
}

setBombLocation(45, 15);
setBombLocation(45, 75);

// const testSquare = blockPos[5].split(","); // 30,30
const [x, y] = blockPos[5].split(",");
const surroundingSquares = [
  `${parseInt(x) - 30},${parseInt(y) - 30}`,
  `${x},${parseInt(y) - 30}`,
  `${parseInt(x) + 30},${parseInt(y) - 30}`,
  `${parseInt(x) + 30},${y}`,
  `${parseInt(x) + 30},${parseInt(y) + 30}`,
  `${x},${parseInt(y) + 30}`,
  `${parseInt(x) - 30},${parseInt(y) + 30}`,
  `${parseInt(x) - 30},${y}`,
];
let count = 0;
surroundingSquares.forEach((block) => {
  if (bombLocation.includes(block)) {
    count += 1;
  }
});

// have sets of bomb coordinates, see if hit matches
// have array of square coordinates? run through, count bombs
// select few at random from blockPos and use for bombs
