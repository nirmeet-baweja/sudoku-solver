import React from "react";
import Sudoku from "./Sudoku";
import { deepCopy } from "../utilities/helper";
import solver from "../utilities/algorithm";

const SudokuContainer = ({ grid, setGrid }) => {
  const solveSudoku = () => {
    const copyGrid = deepCopy(grid);
    solver(copyGrid, 0, 0);
    setGrid(copyGrid);
  };

  return (
    <div className="flex flex-col justify-center max-w-4xl m-auto content-center">
      <Sudoku grid={grid} setGrid={setGrid} />
      <button
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-min m-auto my-4"
        onClick={solveSudoku}
      >
        Solve
      </button>
    </div>
  );
};

export default SudokuContainer;
