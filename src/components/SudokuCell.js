import React from "react";
import { deepCopy } from "../utilities/helper";

const SudokuCell = ({ num, grid, row, col, setGrid }) => {
  // const [number, setNumber] = useState(num);

  const handleChange = (event) => {
    // setNumber(event.target.value);
    const newGrid = deepCopy(grid);
    newGrid[row][col] = event.target.value;
    console.log(newGrid);
    setGrid(newGrid);
  };

  return (
    <td className="border  border-slate-400 w-12 h-12">
      <input value={grid[row][col]} onChange={handleChange} className="w-full"></input>
    </td>
  );
};

export default SudokuCell;
