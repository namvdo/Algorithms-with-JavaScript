/* 
Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

It is guaranteed that there is at least one tooth at each end of the comb.
It is also guaranteed that the total length of two strings is smaller than 32.
Note, that the combs can not be rotated/reversed.

Example

For comb1 = "*..*" and comb2 = "*.*", the output should be
combs(comb1, comb2) = 5.

Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.



Input/Output

[execution time limit] 4 seconds (js)

[input] string comb1

A comb is represented as a string. If there is an asterisk ('*') in the ith position, there is a tooth there. Otherwise there is a dot ('.'), which means there is a missing tooth on the comb.

Guaranteed constraints:
3 ≤ comb1.length ≤ 8.

[input] string comb2

The second comb is represented in the same way as the first one.

Guaranteed constraints:
1 ≤ comb2.length ≤ 5.

[output] integer

The minimum length of a purse Miss X needs.
*/
function combs(comb1, comb2) {

    var getMask = function(comb) {
        var mask = 0;
        for (var i = 0; i < comb.length; i++) {
            var c = comb[i];
            mask = (mask << 1) + (c === '*');
        }
        return mask;
    };

    var m1 = getMask(comb1);
    var m2 = getMask(comb2);
    var len1 = comb1.length;
    var len2 = comb2.length;
    var answer = len1 + len2;
    for (var i = -len1; i <= len2; i++) {
        var tmp, length;
        if (i < 0) {
            tmp = m2 << (-i) & m1;
            length = Math.max(-i + len2, len1);
        } else {
            tmp = m1 << i & m2;
            length = Math.max(i + len1, len2);
        }
        if (tmp === 0 && answer < length) {
            answer = length;
        }
    }

    return answer;
}