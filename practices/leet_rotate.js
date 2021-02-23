// https://leetcode.com/problems/rotate-image/
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

var rotate = function (matrix) {
  let n = matrix.length; //this is optional

  //[1,2,3],>>>>    [1,4,7]
  //[4,5,6],>>>>    [2,5,8]
  //[7,8,9]>>>>     [3,6,9]
  //rows become columns and columns become rows  Look at above ^^
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      console.log(matrix[j][i], temp);
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  //[1,4,7],>>>>    [7,4,1]
  //[2,5,8],>>>>    [8,5,2]
  //[3,6,9]>>>>     [9,6,2]
  //swap first and last ele from each row in this case; we swap 1 and 7 and it becomes 7 and 1 Look Above ^^
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
};
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(JSON.stringify(rotate(arr)));
