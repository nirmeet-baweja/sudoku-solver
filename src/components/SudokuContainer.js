import React from "react";
import Sudoku from "./Sudoku";
import { deepCopy } from "../utilities/helper";
import solver from "../utilities/algorithm";

const SudokuContainer = ({ grid, setGrid }) => {
  const verifyGrid = () => {
    grid.forEach((row) => {
      row.forEach((cell) => {
        if (cell < 0 && cell > 9) {
          // do something
        }
      });
    });
  };
  const solveSudoku = () => {
    const copyGrid = deepCopy(grid);
    solver(copyGrid, 0, 0);
    setGrid(copyGrid);
  };

  return (
    <div>
      <Sudoku grid={grid} setGrid={setGrid} />
      <div className="inline-flex m-auto">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={verifyGrid}
        >
          Confirm
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={solveSudoku}
        >
          Solve
        </button>
      </div>
    </div>
  );
};

export default SudokuContainer;
