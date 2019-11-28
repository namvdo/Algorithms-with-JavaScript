/*
The prime xor operation, a # b, takes two numbers and returns the product of the prime numbers that divide either a or b, but not both a and b.

Given two numbers a and b, return the result of operation a # b.

Example:

For a = 18 and b = 10, the output should be primeXor(a, b) = 15.
a = 2 * 3 * 3 and b = 2 * 5: Both factorizations contain the prime number 2, so 2 is not a candidate. 3 appears only in the factorization of a and 5appears only in the factorization of b, so a # b = 3 * 5 = 15. Note that each prime number is counted once in a # b, even though 3 appears twice in the factorization of a.

Input/Output

[execution time limit] 0.5 seconds 

[input] integer a

Guaranteed constraints:
2 ≤ a ≤ 107.

[input] integer b

Guaranteed constraints:
2 ≤ b ≤ 107.

[output] integer64

The result of operation a # b.
*/

function primeXor(a, b) {
    let primeFactorA = Array.from(new Set(primeFactor(a)));
    let primeFactorB = Array.from(new Set(primeFactor(b)));
    let sum = primeFactorA
        .concat(primeFactorB)
        .filter(
            item => !primeFactorA.includes(item) || !primeFactorB.includes(item)
        )
    let rs = 1;
    for (let i = 0; i < sum.length; i++) {
        rs *= sum[i]
    }
    return rs;
}

function primeFactor(n) {
    let divisor = 2;
    let resArray = [];
    let result = n;
    while (result !== 1) {
        if (result % divisor === 0) {
            resArray.push(divisor);
            result = result / divisor;
        } else {
            divisor++;
        }

    }
    return resArray;
}

