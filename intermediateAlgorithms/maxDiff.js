/*
Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number.
*/
// O(n)
const maxDiff = arr => {
    let maxDiff = arr[1] - arr[0];
    let minElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - minElement > maxDiff) {
            maxDiff = arr[i] - minElement;
        }
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    return maxDiff;
}

/*
// O(n)
const maxDiff = arr => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max - min;
}
*/
console.log(maxDiff([2, 5, 7, 9, 23]));
