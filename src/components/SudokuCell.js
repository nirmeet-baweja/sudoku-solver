import React, { useState, useEffect } from "react";
import { deepCopy } from "../utilities/helper";

const SudokuCell = ({ grid, row, col, setGrid }) => {
  const [classList, setClassList] = useState([
    "w-full",
    "h-full",
    "text-center",
    "text-slate-700",
    "cursor-pointer",
    "focus:outline-pink-500",
  ]);

  const userInputClassList = [
    "w-full",
    "h-full",
    "text-center",
    "text-pink-500",
    "font-bold",
    "bg-slate-100",
    "cursor-pointer",
    "focus:outline-pink-500",
  ];

  const emptyInputClassList = [
    "w-full",
    "h-full",
    "text-center",
    "text-slate-700",
    "cursor-pointer",
    "focus:outline-pink-500",
  ];

  useEffect(() => {
    if (grid[row][col] === "") {
      setClassList([
        "w-full",
        "h-full",
        "text-center",
        "text-slate-700",
        "cursor-pointer",
        "focus:outline-pink-500",
      ]);
    }
  }, [grid, row, col]);

  const handleChange = (event) => {
    const inputNum = Number(event.target.value);
    const newGrid = deepCopy(grid);
    if (inputNum > 0 && inputNum < 10) {
      newGrid[row][col] = inputNum;
      setClassList(userInputClassList);
    } else {
      newGrid[row][col] = "";
      setClassList(emptyInputClassList);
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
        className={classList.join(" ")}
      ></input>
    </td>
  );
};

export default SudokuCell;
