/*
Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

Example

For items = [3, 5, 2, 4, 5], the output should be
arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer items

Non-empty array of positive integers.

Guaranteed constraints:
3 ≤ items.length ≤ 15,
1 ≤ items[i] ≤ 200.

[output] array.integer

Array containing answer values computed as described above.

*/

function arrayPreviousLess(items) {
    const findPreviousLess = (value, index) => {
        return items
            .slice(0, index)
            .reverse()
            .find(prev => prev < value) || -1
    }
    return items.map(findPreviousLess)
}
