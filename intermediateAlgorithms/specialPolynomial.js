/* 
Given integers x and n, find the largest integer k such that x^0+x^1+x^2+...+x^k ≤ n.

Example

For x = 2 and n = 5, the output should be
specialPolynomial(x, n) = 1.

We have 20 + 21 < 5 and 20 + 21 + 22 > 5.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer x

Guaranteed constraints:
1 ≤ x ≤ 10.

[input] integer n

Guaranteed constraints:
5 ≤ n < 109.
*/


function specialPolynomial(x, n) {
    var sum = 0;
    for (var k = 0;; k++) {
      sum += Math.pow(x, k);
      if (sum > n) return k - 1;
    }
  }
