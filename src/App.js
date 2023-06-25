import "./App.css";
import React, { useState } from "react";
import SudokuContainer from "./components/SudokuContainer";

function App() {
  const rows = 9;
  const columns = 9;
  const rowTemplate = Array(columns).fill("-");
  const initGrid = Array.from(Array(rows), () => [...rowTemplate]);
  const [grid, setGrid] = useState(initGrid);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Sudoku Solver!</h1>
      <SudokuContainer grid={grid} setGrid={setGrid} />
    </div>
  );
}

export default App;
