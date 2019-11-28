/*
Given a string, find the number of different non-empty substrings in it.

Example

For inputString = "abac", the output should be
differentSubstrings(inputString) = 9.
They are:

"a", "b", "c",
"ab", "ac", "ba",
"aba", "bac",
"abac"
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting only of lowercase English letters.

Guaranteed constraints:
3 ≤ inputString.length ≤ 10.

*/
const differentString = string => {
    let result = 1;
    let substring = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = 1; j <= string.length; j++) {
            substring.push(string.substring(i, j));
        }
    }
    console.log(substring.sort());
    for (let i = 1; i < substring.length - 1; i++) {
        console.log(i)
        if (substring[i] !== substring[i - 1]) {
            result++;
        }
    }
    console.log(result);
    return result;
}
differentString("abac");