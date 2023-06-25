import React from "react";
import SudokuCell from "./SudokuCell";

const Sudoku = ({ grid, setGrid }) => {
  return (
    <div>
      <table className="border-spacing-0 border border-slate-400">
        <tbody>
          {grid.map((gridRow, rowIndex) => (
            <tr key={`${rowIndex}`}>
              {gridRow.map((_, colIndex) => (
                <SudokuCell
                  grid={grid}
                  row={rowIndex}
                  col={colIndex}
                  setGrid={setGrid}
                  key={`${rowIndex},${colIndex}`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sudoku;
