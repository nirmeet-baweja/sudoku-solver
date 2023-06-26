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
      const newClassList = classList.map((classItem) =>
        classItem === "text-slate-700" ? "text-pink-500" : classItem
      );
      !newClassList.includes("font-bold") && newClassList.push("font-bold");
      !newClassList.includes("bg-slate-100") &&
        newClassList.push("bg-slate-100");

      setClassList(newClassList);
    } else {
      newGrid[row][col] = "";
      const newClassList = classList.filter(
        (classItem) => classItem !== "font-bold" && classItem !== "bg-slate-100"
      );
      const index = newClassList.indexOf("text-pink-500");
      if (index !== -1) {
        newClassList[index] = "text-slate-700";
      }
      setClassList(newClassList);
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
