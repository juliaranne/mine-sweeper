import "./style.css";

class Bomb {
  getLocation(gridsize: number): number {
    return Math.floor(Math.random() * gridsize + 1);
  }
}

class Grid {
  private size: number;

  constructor(s: number) {
    this.size = s;
  }

  drawGrid() {
    const app = document.getElementById("app");
    for (let i = 0; i < this.size; i += 1) {
      const block = new Block("plain");
      const btn = block.createBlock();
      console.log(block, btn);
      app?.appendChild(btn);
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

const game = new Grid(9);
game.drawGrid();
