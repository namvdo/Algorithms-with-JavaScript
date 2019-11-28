/*
Consider several points lying on a straight line. Call an unordered triple of points an equidistant triple if one of them is the mid-point of the segment formed by the other two.

Given the coordinates of the points, find the number of equidistant triples formed by them.

Example

For coordinates = [1, 2, 4, 6, 7, 8], the output should be
equidistantTriples(coordinates) = 4.

The equidistant triples are: (1, 4, 7), (2, 4, 6), (4, 6, 8), (6, 7, 8).

Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer coordinates

Sorted array of distinct integers.

Guaranteed constraints:
2 ≤ coordinates.length ≤ 2500,
-10000 ≤ coordinates[i] ≤ 10000.

[output] integer
*/
function equidistantTriples(coordinates) {
    var ans = 0;
    for (var i = 1; i < coordinates.length - 1; i++) {
        var left = i - 1;
        var right = i + 1;
        while (left >= 0 && right < coordinates.length) {
            var distL = coordinates[i] - coordinates[left];
            var distR = coordinates[i] - coordinates[right];
            if (distL === distR) {
                ans++;
                left--;
                right++;
            } else if (distL < distR) {
                left--;
            } else {
                right++;
            }
        }
    }

    return ans;
}