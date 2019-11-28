/* 
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Passed
smallestCommons([1, 5]) should return a number.
Passed
smallestCommons([1, 5]) should return 60.
Passed
smallestCommons([5, 1]) should return 60.
Passed
smallestCommons([2, 10]) should return 2520.
Passed
smallestCommons([1, 13]) should return 360360.
Passed
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
    let newArr = [];
    if (arr[1] < arr[0]) { // swap value if a[1] < a[0] to make sure the loop runs correctly.
        let temp = arr[1];
        arr[1] = arr[0];
        arr[0] = temp;
    }

    function range() {
        for (let i = arr[0]; i <= arr[1]; i++) {
            newArr.push(i);
        }
        return newArr; // new array with all the value need to find the less common multiple
    }

    function gcd(a, b) { // a = 2, b = 10
        return !b ? a : gcd(b, a % b); // !10 ? 2: gcd(10, 2 %10) // 2
        // find the great common divisor
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b); // find the less common multiple
    }

    var multiple = arr[0];
    range(arr[0], arr[1]).forEach(function(n) {
        multiple = lcm(multiple, n);
    });
    return multiple


}
smallestCommons([2, 10]);