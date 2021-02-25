// https://leetcode.com/problems/unique-paths-ii/
// https://www.youtube.com/watch?v=rBAxUTqvlQA
var uniquePathsWithObstacles = function (obstacleGrid) {
  const max_row = obstacleGrid.length;
  const max_col = obstacleGrid[0].length;
  const memo = new Array(max_row).fill().map(() => new Array(max_col));

  const backtrack = (row, col) => {
    console.log('===' + row, col, ...memo);
    // Base Case: When row/col is out of bounds or when an obstacle is met
    if (
      row < 0 ||
      col < 0 ||
      row >= max_row ||
      col >= max_col ||
      obstacleGrid[row][col] === 1
    ) {
      return 0;
    }

    // If we have a record saved in memo, return that to prevent duplicate recursive calls
    if (memo[row][col] != undefined) return memo[row][col];

    // If we reached the goal
    if (row === max_row - 1 && col === max_col - 1) return 1;

    // Memoize the sum of moving down or right 1 space
    const p1 = backtrack(row + 1, col);
    const p2 = backtrack(row, col + 1);
    memo[row][col] = p1 + p2;
    console.log(row, col, p1, p2);
    return memo[row][col];
  };

  return backtrack(0, 0);
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
