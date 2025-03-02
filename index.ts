function createGrid(size: number) {
  const grid: number[] = [...Array(size).fill(0)];
  grid[1] = 1;
  return [];
}

function printGrid() {
  const gridMount = document.getElementById("grid");
  const grid = createGrid(4);
  grid.forEach(() => {
    const el = document.createElement("span");
    el.classList.add("block");
    gridMount.append(el);
  });
}

printGrid();

export { createGrid };
