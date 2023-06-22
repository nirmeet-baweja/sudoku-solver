const solver = (grid, currentRow, currentCol) => {
  const initObject = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
  };

  const rowMap = new Map();
  const colMap = new Map();
  const gridMap = new Map();
};

const isSafe = (grid) => {
  // rows check
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] !== "-") {
        if (rowSet.has(grid[i][j])) {
          return false;
        }
        rowSet.add(grid[i][j]);
      }
    }
  }

  // col check
  for (let j = 0; j < 9; j++) {
    const colSet = new Set();
    for (let i = 0; i < 9; i++) {
      if (grid[i][j] !== "-") {
        if (colSet.has(grid[i][j])) {
          return false;
        }
        colSet.add(grid[i][j]);
      }
    }
  }

  // grid check
  for (let g = 0; g < 9; g++) {
    const gridSet = new Set();

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        console.log(3 * Math.floor(g / 3));
        console.log(i);
        console.log(j);
        if (
          gridSet.has(
            grid[i + 3 * Math.floor(g / 3)][j + 3 * Math.floor(g / 3)]
          )
        ) {
          return false;
        }
        gridSet.add(grid[i][j]);
      }
    }
  }
  return false;
};

isSafe()