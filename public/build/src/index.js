function createGrid(size) {
    const grid = [...Array(size).fill(0)];
    grid[1] = 1;
    return grid;
}
function printGrid() {
    console.log("print grid");
    const gridMount = document.getElementById("grid");
    const grid = createGrid(4);
    grid.forEach(() => {
        const el = document.createElement("button");
        el.classList.add("block");
        console.log("append", el);
        gridMount.append(el);
    });
}
printGrid();
export { createGrid };
//# sourceMappingURL=index.js.map