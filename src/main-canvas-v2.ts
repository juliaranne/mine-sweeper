enum GameState {
  Play = "PLAY",
  Win = "WIN",
  Lose = "LOSE",
}

interface Tile {
  [key: number]: number[];
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
  private coordinates: Tile = {};
  private gridCount: number = 1;

  constructor(size: number) {
    this.size = size;
    const activeGame = new GridMouseEvents(this.canvas);
    activeGame.addEvents();
  }

  private drawColumn(y: number) {
    if (this.ctx) {
      for (let i = 0; i < this.size / Math.sqrt(this.size); i += 1) {
        this.ctx.fillStyle = "#e0e0e0";
        this.ctx.fillRect(i * 30, y, 30, 30);
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(i * 30, y, 30, 30);
        this.coordinates[this.gridCount] = [i * 30, y];
        this.gridCount += 1;
      }
    }
    console.log(this.coordinates);
  }

  private drawBomb(pos: number[]) {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.arc(pos[0] + 15, pos[1] + 15, 12, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = "black";
      this.ctx.fill();
    }
  }

  showBomb(index: number) {
    this.drawBomb(this.coordinates[index]);
  }

  drawGrid() {
    let sqWidth = 0;
    for (let i = 0; i < Math.sqrt(this.size); i += 1) {
      this.drawColumn(sqWidth);
      sqWidth += 30;
    }
  }

  getCoordinates() {
    return this.coordinates;
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

      const tiles = gameBoard.getCoordinates();
      const index = Object.entries(tiles).find(([key, val]) => {
        if (val[0] === x - (x % 30) && val[1] === y - (y % 30)) {
          return key;
        }
      });
      const bombs = new Bombs();
      if (index) {
        bombs.checkLocation(parseInt(index[0], 10));
      }
    });
  }
}

class Bombs {
  private bombs: number[] = [2, 8];
  private width = 30;

  checkLocation(index: number) {
    const hit = this.bombs.find((bombIndex) => bombIndex === index);
    if (hit) {
      gameBoard.showBomb(hit);
    }

    const nums = [
      index - 4,
      index - 2,
      index - 3,
      index - 1,
      index + 1,
      index + 2,
      index + 3,
      index + 4,
    ];

    const bombCount = nums.filter((num) => this.bombs.includes(num));
    console.log(bombCount.length);

    // tis.forEach(([x, y]) => {if (x === this.bombs[0][0] && y === this.bombs[0][1]) {

    // }});
  }
}

// dont' check for bomb spefically
// check that first, if not, count surrounding squares for bombs

const gameBoard = new Grid(9);
gameBoard.drawGrid();
