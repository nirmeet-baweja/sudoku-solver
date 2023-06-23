const positionSolver = (grid, currentRow, currentCol) => {
  for (let i = 1; i <= 9; i++) {
    grid[currentRow][currentCol] = i;
    if (isSafe(grid)) {
      return grid;
    }
  }
  return undefined;
};

const solver = (grid, maxRow, maxCol) => {
  const copyGrid = grid;
  if (maxRow === 8 && maxCol === 8) {
    console.log("solved!");
    console.log(grid);
    return true;
  }
  console.log("starting the loop");
  console.log("solving for grid:");
  console.log(grid);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === "-") {
        console.log(`Found empty spot at ${i}, ${j}`);
        // const result = positionSolver(grid, i, j);
        for (let num = 1; num <= 9; num++) {

          grid[i][j] = num;
          if (isSafe(grid)) {
            if (!solver(grid, i, j)) {
              grid[i][j] = "-";
              continue;
            } else {
              return true;
            }
          } else {
            grid[i][j] = "-";
          }
        }
        if (grid[i][j] === "-") {
          console.log("can't be solved");
          return false;
        }
      }
    }
  }
};

const rowCheck = (grid) => {
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
  return true;
};

const colCheck = (grid) => {
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
  return true;
};

const gridCheck3x3 = (grid) => {
  for (let g = 0; g < 9; g++) {
    const gridSet = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let r = i + 3 * Math.floor(g / 3);
        let c = j + 3 * (g % 3);
        if (grid[r][c] !== "-") {
          if (gridSet.has(grid[r][c])) {
            return false;
          }
          gridSet.add(grid[r][c]);
        }
      }
    }
  }
  return true;
};

const isSafe = (grid) => {
  return rowCheck(grid) && colCheck(grid) && gridCheck3x3(grid);
};

// console.log(
//   isSafe([
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   ])
// );

// console.log("********************************************");

// console.log(
//   isSafe([
//     [1, 7, 2, 5, 4, 9, 6, 8, 3],
//     [6, 4, 5, 8, 7, 3, 2, 1, 9],
//     [3, 8, 9, 2, 6, 1, 7, 4, 5],
//     [4, 9, 6, 3, 2, 7, 8, 5, 1],
//     [8, 1, 3, 4, 5, 6, 9, 7, 2],
//     [2, 5, 7, 1, 9, 8, 4, 3, 6],
//     [9, 6, 4, 7, 1, 5, 3, 2, 8],
//     [7, 3, 1, 6, 8, 2, 5, 9, 4],
//     [5, 2, 8, 9, 3, 4, 1, 6, 7],
//   ])
// );

// console.log("********************************************");

// console.log(
//   isSafe([
//     [1, "-", 2, 5, 4, 9, 6, "-", 3],
//     [6, 4, 5, "-", 7, 3, 2, 1, 9],
//     [3, 8, 9, 2, 6, 1, 7, 4, "-"],
//     [4, "-", 6, 3, 2, "-", 8, 5, 1],
//     ["-", 1, 3, 4, 5, 6, "-", 7, 2],
//     [2, 5, "-", 1, 9, 8, 4, 3, 6],
//     [9, 6, 4, 7, 1, "-", 3, 2, 8],
//     [7, 3, "-", 6, 8, 2, 5, 9, 4],
//     [5, "-", 8, 9, 3, "-", 1, 6, "-"],
//   ])
// );

// console.log("********************************************");

// solver(
//   [
//     [1, "-", 2, 5, 4, 9, 6, "-", 3],
//     [6, 4, 5, "-", 7, 3, 2, 1, 9],
//     [3, 8, 9, 2, 6, 1, 7, 4, "-"],
//     [4, "-", 6, 3, 2, "-", 8, 5, 1],
//     ["-", 1, 3, 4, 5, 6, "-", 7, 2],
//     [2, 5, "-", 1, 9, 8, 4, 3, 6],
//     [9, 6, 4, 7, 1, "-", 3, 2, 8],
//     [7, 3, "-", 6, 8, 2, 5, 9, 4],
//     [5, "-", 8, 9, 3, "-", 1, 6, "-"],
//   ],
//   0,
//   0
// );

// console.log("********************************************");

// solver(
//   [
//     ["-", "-", "-", "-", "-", "-", 6, 8, "-"],
//     ["-", "-", "-", "-", 7, 3, "-", "-", 9],
//     [3, "-", 9, "-", "-", "-", "-", 4, 5],
//     [4, 9, "-", "-", "-", "-", "-", "-", "-"],
//     ["-", 1, 3, 4, 5, 6, "-", 7, 2],
//     [2, 5, "-", 1, 9, 8, 4, 3, 6],
//     [9, 6, 4, 7, 1, "-", 3, 2, 8],
//     [7, 3, "-", 6, 8, 2, 5, 9, 4],
//     [5, "-", 8, 9, 3, "-", 1, 6, "-"],
//   ],
//   0,
//   0
// );

console.log("********************************************");

solver(
  [
    ["-", "-", "-", "-", "-", "-", 6, 8, "-"],
    ["-", "-", "-", "-", 7, 3, "-", "-", 9],
    [3, "-", 9, "-", "-", "-", "-", 4, 5],
    [4, 9, "-", "-", "-", "-", "-", "-", "-"],
    ["-", 1, 3, 4, 5, 6, "-", 7, 2],
    [2, 5, "-", 1, 9, 8, 4, 3, 6],
    [9, 6, 4, 7, 1, "-", 3, 2, 8],
    [7, 3, "-", 6, 8, 2, 5, "-", 4],
    [5, "-", 8, 9, 3, "-", 1, 6, "-"],
  ],
  0,
  0
);
