import "./style.css";

class Bomb {
  getLocation(gridsize: number): number {
    return Math.floor(Math.random() * gridsize + 1);
  }
}

class Grid {
  private size: number;
  private app: HTMLElement | null = document.getElementById("app");

  constructor(s: number) {
    this.size = s;
  }

  setGridWidth(): void {
    if (this.app) {
      this.app.style.width = `${42 * Math.sqrt(this.size)}px`;
    }
  }

  drawGrid(): void {
    for (let i = 0; i < this.size; i += 1) {
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

const game = new Grid(9);
game.setGridWidth();
game.drawGrid();
