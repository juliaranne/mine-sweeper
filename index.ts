function createGrid(size: number) {
  const grid: number[] = [...Array(size).fill(0)];
  grid[1] = 1;
  return grid;
}

console.log(createGrid(4));

export default createGrid;
