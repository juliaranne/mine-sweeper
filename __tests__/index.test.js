import { expect, test } from "vitest";
import { createGrid, sum } from "../index";

test("expect a grid of given size with one bomb", () => {
  const grid = createGrid(6);
  expect(grid).toEqual([0, 1, 0, 0, 0, 0]);
});
