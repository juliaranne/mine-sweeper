import "./style.css";

// grid size and bomb count
// size squared array
// generate random numbers less than array
// split array by

class BlockArray {
  private gridArray: number[] = [];
  private gridWidth: number;

  constructor(s: number) {
    this.gridWidth = s;
  }

  createGridArray() {
    for (let i = 0; i < this.gridWidth; i += 1) {
      const row = new Array(this.gridWidth).fill(0);
      this.gridArray.push(row);
    }
    return this.gridArray;
  }
}

class BombGrid {
  // private bombLocation: number;
  private blockCount: number;
  private bombLocation: number;
  private gridWidth: number;

  constructor(s: number) {
    this.gridWidth = s;
    this.blockCount = s ** 2;
    this.bombLocation = Math.floor(Math.random() * this.blockCount + 1);
  }

  addBombToGrid() {
    const grid = new BlockArray(this.gridWidth);
    const gridValues = grid.createGridArray();
    let count = 0;
    let bombSet = false;

    for (let i = 0; i < this.gridWidth; i += 1) {
      count += this.gridWidth;
      if (count >= this.bombLocation && !bombSet) {
        const bombIndex = this.bombLocation - (count - this.gridWidth);
        gridValues[i][bombIndex - 1] = 9;
        bombSet = true;
      }
    }
    return gridValues;
  }
}

class Grid {
  private dimension: number;
  private app: HTMLElement | null = document.getElementById("app");

  constructor(d: number) {
    this.dimension = d;
  }

  setGridWidth(): void {
    if (this.app) {
      this.app.style.width = `${42 * this.dimension}px`;
    }
  }

  drawGrid(): void {
    for (let i = 0; i < this.dimension ** 2; i += 1) {
      const block = new Block("plain");
      const btn = block.createBlock();
      this.app?.appendChild(btn);
    }
  }
}

class Block {
  private blockType: string;

  constructor(bt: string) {
    this.blockType = bt;
  }

  private isInPlay: boolean = true;

  setIsInPlay(): void {
    this.isInPlay = false;
  }

  createBlock(): HTMLButtonElement {
    const btn = document.createElement("button");
    return btn;
  }
}

const game = new Grid(3);
game.setGridWidth();
game.drawGrid();
const grid = new BlockValues(3);
console.log(grid.setBlockValues());
