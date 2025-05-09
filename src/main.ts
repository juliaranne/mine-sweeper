import "./style.css";

// grid size and bomb count
// size squared array
// generate random numbers less than array, change values of array
// split array by size
class BombGrid {
  private bombCount: number;
  private width: number;

  constructor(width: number, bombs: number) {
    this.width = width;
    this.bombCount = bombs;
  }

  createArrayGrid() {
    // const bombPositions: number[] = [];
    const blockCount = this.width ** 2;
    const getRandomLocation = () => Math.floor(Math.random() * blockCount + 1);
    const arr = new Array(blockCount).fill(0);
    let count = 0;
    while (count < this.bombCount) {
      const pos = getRandomLocation();
      if (arr[pos] !== 9) {
        arr[pos] = 9;
        count += 1;
      }
    }
    return arr;
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

const grid = new BombGrid(3, 2);
console.log(grid.createArrayGrid());
