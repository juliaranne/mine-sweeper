"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrid = createGrid;
function createGrid(size) {
    // const grid: number[] = [...Array(size).fill(0)];
    // grid[1] = 1;
    return [];
}
function printGrid() {
    var gridMount = document.getElementById("grid");
    var grid = createGrid(4);
    grid.forEach(function (item) {
        var el = document.createElement("span");
        el.classList.add("block");
        gridMount.append(el);
    });
}
printGrid();
//# sourceMappingURL=index.js.map