function createGrid(size: number) {
  const grid: number[] = [...Array(size).fill(0)];
  grid[1] = 1;
  return grid;
}

export { createGrid };
