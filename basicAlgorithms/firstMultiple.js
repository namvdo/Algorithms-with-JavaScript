/*
Find the smallest integer not less than the given limit which is divisible by all integers from the given array.

Example

For divisors = [2, 3, 4] and start = 13, the output should be
firstMultiple(divisors, start) = 24.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer divisors

Array of positive integers.

Guaranteed constraints:
1 ≤ divisors.length ≤ 5,
1 ≤ divisors[i] ≤ 15.

[input] integer start

A positive integer.

Guaranteed constraints:
10 ≤ start ≤ 400.

[output] integer

The smallest integer not less than start which is divisible by all integers from divisors.
*/

function firstMultiple(divisors, start) {
    let i = start
    while(!divisors.every(v => i % v === 0)) i++
    return i
  }