import "./style.css";

// grid size and bomb count
// size squared array
// generate random numbers less than array
// split array by
class BombGrid {
  private bombCount: number;
  private width: number;

  constructor(width: number, bombs: number) {
    this.width = width;
    this.bombCount = bombs;
  }

  createArrayGrid() {
    const bombPositions: number[] = [];
    const blockCount = this.width ** 2;
    const getRandomLocation = () => Math.floor(Math.random() * blockCount + 1);
    for (let i = 0; i < this.bombCount; i += 1) {
      let pos = getRandomLocation();
      if (bombPositions.includes(pos)) {
        pos = getRandomLocation();
      }
      bombPositions.push(pos);
    }
    const arr = new Array(this.width ** 2).fill(0);
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
