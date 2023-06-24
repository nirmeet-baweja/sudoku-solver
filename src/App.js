import "./App.css";
import React, { useState } from "react";
import Sudoku from "./components/Sudoku";

function App() {
  const rows = 9;
  const columns = 9;
  const rowTemplate = Array(columns).fill("-");
  const initGrid = Array.from(Array(rows), () => [...rowTemplate]);
  const [grid, setGrid] = useState(initGrid);

  const solveSudoku = () => true;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Sudoku grid={grid} setGrid={setGrid} />
      <button onClick={solveSudoku} />
    </div>
  );
}

export default App;
