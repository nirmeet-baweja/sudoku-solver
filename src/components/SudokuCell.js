import React from "react";
import { deepCopy } from "../utilities/helper";

const SudokuCell = ({ grid, row, col, setGrid }) => {
  const handleChange = (event) => {
    const inputNum = Number(event.target.value);
    const newGrid = deepCopy(grid);
    if (inputNum > 0 && inputNum < 10) {
      newGrid[row][col] = inputNum;
    } else {
      newGrid[row][col] = "";
    }
    setGrid(newGrid);
  };

  return (
    <td className="border  border-slate-400 w-12 h-12">
      <input
        value={grid[row][col]}
        onChange={handleChange}
        className="w-full h-full text-center"
      ></input>
    </td>
  );
};

export default SudokuCell;
