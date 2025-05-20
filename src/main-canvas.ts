const canvasHeight = 400;
const canvasWidth = 400;
const tileSize = 20;
const tileCount = canvasWidth / tileSize;

const canvas = document.getElementById("app") as HTMLCanvasElement;
const ctx = canvas?.getContext("2d");

for (let i = 1; i < tileCount; i += 1) {
  ctx?.beginPath();
  ctx?.moveTo(tileSize * i, 0);
  ctx?.lineTo(tileSize * i, 400);
  ctx?.stroke();
}

for (let i = 1; i < tileCount; i += 1) {
  ctx?.beginPath();
  ctx?.moveTo(0, tileSize * i);
  ctx?.lineTo(400, tileSize * i);
  ctx?.stroke();
}
