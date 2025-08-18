enum GameState {
  Play = "PLAY",
  Win = "WIN",
  Lose = "LOSE",
}

class Reset {
  private reset: HTMLElement | null = document.getElementById("reset");
  private game_state: string = GameState.Play;

  resetGame() {
    this.game_state = GameState.Play;
  }
}

class FlagCount {
  private count: number = 0;
  private flagElement: HTMLElement | null =
    document.getElementById("flagCount");

  private updateUI() {
    if (this.flagElement) {
      this.flagElement.textContent = this.count.toString();
    }
  }

  setCount(value: number) {
    this.count = value;
    this.updateUI();
  }

  increaseCount() {
    this.count = this.count + 1;
    this.updateUI();
  }

  decreaseCount() {
    this.count = this.count - 1;
    this.updateUI();
  }
}

class Grid {
  private size;
  private canvas = document.getElementById("app") as HTMLCanvasElement;
  private ctx = this.canvas?.getContext("2d");

  constructor(size: number) {
    this.size = size;
    const activeGame = new GridMouseEvents(this.canvas);
    activeGame.addEvents();
  }

  private drawColumn(x: number) {
    if (this.ctx) {
      for (let i = 0; i < this.size / 2; i += 1) {
        this.ctx.fillStyle = "#e0e0e0";
        this.ctx.fillRect(x, i * 30, 30, 30);
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(x, i * 30, 30, 30);
      }
    }
  }

  private drawBomb(x: number, y: number) {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.arc(x + 15, y + 15, 12, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = "black";
      this.ctx.fill();
    }
  }

  showBomb([x, y]: number[]) {
    this.drawBomb(x, y);
  }

  drawGrid() {
    this.drawColumn(0);
    this.drawColumn(30);
  }
}

class GridMouseEvents {
  private activeGrid;

  constructor(canvas: HTMLCanvasElement) {
    this.activeGrid = canvas;
  }

  addEvents() {
    this.activeGrid.addEventListener("mousedown", (e: MouseEvent) => {
      const x = e.offsetX;
      const y = e.offsetY;

      console.log(x - (x % 30), y - (y % 30));
      const bombs = new Bombs();
      bombs.checkLocation(x - (x % 30), y - (y % 30));
    });
  }
}

class Bombs {
  private bombs: number[][] = [[30, 0]];

  checkLocation(x: number, y: number) {
    const hit = this.bombs.find((bomb) => bomb[0] === x && bomb[1] === y);
    if (hit) {
      gameBoard.showBomb(hit);
    }
  }
}

const gameBoard = new Grid(4);
gameBoard.drawGrid();
