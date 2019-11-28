/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

function spiralMatrix(n) {
    if (n == 0) return [];
    if (n == 1) return [
        [1]
    ];
    let result = [],
        num = 1;
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    let rowStart = 0,
        rowEnd = n - 1,
        colStart = 0,
        colEnd = n - 1;
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            result[rowStart][i] = num;
            num++;
        }
        rowStart++;
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][colEnd] = num;
            num++;
        }
        colEnd--;
        for (let i = colEnd; i >= colStart; i--) {
            result[rowEnd][i] = num;
            num++;
        }
        rowEnd--;
        for (let i = rowEnd; i >= rowStart; i--) {
            result[i][colStart] = num;
            num++;
        }
        colStart++;
    }
    return result;
};