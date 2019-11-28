/* 
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Matrix size, a positive integer.

Guaranteed constraints:
3 ≤ n ≤ 100.
*/


function spiralNumbers(n) {
  let ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = new Array(n);
  }

  let p = 1, r = 0;
  for (; n > 0; n -= 2) {
    for (let a = 0; a < n; a++) ans[r][a + r] = p++;
    for (let b = r + 1; b < n + r; b++) ans[b][n - 1 + r] = p++;
    for (let c = n - 2 + r; c >= r; c--) ans[n - 1 + r][c] = p++;
    for (let d = n - 2 + r; d > r; d--) ans[d][r] = p++;
    r++;
  }
  return ans;
}