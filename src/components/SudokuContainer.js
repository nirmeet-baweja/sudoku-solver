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

  const clearSudoku = () => {
    const rows = 9;
    const columns = 9;
    const rowTemplate = Array(columns).fill("");
    const emptyGrid = Array.from(Array(rows), () => [...rowTemplate]);
    setGrid(emptyGrid);
  };

  return (
    <div className="flex flex-col justify-center max-w-4xl m-auto content-center">
      <Sudoku grid={grid} setGrid={setGrid} />
      <div className="inline-flex justify-center">
        <button
          className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded w-min m-4"
          onClick={solveSudoku}
        >
          Solve
        </button>
        <button
          className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded w-min m-4"
          onClick={clearSudoku}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SudokuContainer;
