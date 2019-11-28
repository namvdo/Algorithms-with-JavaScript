/* 
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer
*/

function deleteDigit(n) {
    var m = 0;
    for(var d=1;d <= n; d*=10){
        var t = n%d + (Math.floor(Math.floor(n/d)/10)*d)
        m = Math.max(m,t);
    }
    return m;
}