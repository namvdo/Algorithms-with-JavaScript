/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Passed
fearNotLetter("abce") should return "d".
Passed
fearNotLetter("abcdefghjklmno") should return "i".
Passed
fearNotLetter("stvwx") should return "u".
Passed
fearNotLetter("bcdf") should return "e".
Passed
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

This code still is not optimized, hope you can do it better.
*/


function fearNotLetter(str) {
    let temp = str.split("");
    let newA = []
    for (let i = 0; i < temp.length; i++) {
        newA.push(temp[i].charCodeAt(temp[i]));
        if (newA[i] + 1 !== newA[i + 1]) {
            newA.splice(newA.indexOf(newA[i + 1]), 0, newA[i] + 1);
        }

    }
    let rs = [];
    for (let i = 0; i < newA.length; i++) {
        rs.push(String.fromCharCode(newA[i]));
    }
    for (let i = 0; i < rs.length; i++) {
        if (temp.indexOf(rs[i]) == -1) {
            return rs[i];
        }
    }
}
console.log(fearNotLetter("bcdf"));