"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrid = createGrid;
function createGrid(size) {
    const grid = [...Array(size).fill(0)];
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
//# sourceMappingURL=index.js.map