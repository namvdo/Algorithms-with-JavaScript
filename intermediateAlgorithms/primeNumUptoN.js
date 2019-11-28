/* Find all prime numbers from 1 up to n (n not inclusive), for example:
INPUT : 18 
OUTPUT: [2, 3, 5, 7, 11, 13, 17]
*/ 

// Time complexity: O(n*log(log(n))) 
var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [],
        upperLimit = Math.sqrt(n),
        output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if (array[i]) {
            output.push(i);
        }
    }

    return output;
};
