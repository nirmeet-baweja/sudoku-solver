import React from "react";
import { deepCopy } from "../utilities/helper";

const SudokuCell = ({ grid, row, col, setGrid }) => {
  const handleChange = (event) => {
    const inputNum = Number(event.target.value);
    const newGrid = deepCopy(grid);
    if (inputNum > 0 && inputNum < 10) {
      newGrid[row][col] = inputNum;
      event.target.classList.add("text-teal-400");
    } else {
      newGrid[row][col] = "";
    }
    setGrid(newGrid);
  };

  return (
    <td
      className={`border w-12 h-12 border-slate-400 ${
        (row === 2 || row === 5) && "border-b-slate-400 border-b-2"
      } ${(col === 2 || col === 5) && "border-r-slate-400 border-r-2"}`}
    >
      <input
        value={grid[row][col]}
        onChange={handleChange}
        className="w-full h-full text-center"
      ></input>
    </td>
  );
};

export default SudokuCell;
