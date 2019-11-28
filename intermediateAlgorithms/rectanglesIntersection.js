/*
A rectangle with sides parallel to the axes can be written as a pair of opposing vertices' coordinates of this rectangle.

Find the area of the intersection of two rectangles given in the described format.

Example

For a = [0, 0], b = [2, 2], c = [1, 1], and d = [3, 3], the output should be
rectanglesIntersection(a, b, c, d) = 1.

Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Array of two integers - coordinates of the first rectangle's first vertex.

Guaranteed constraints:
a.length = 2,
-104 ≤ a[i] ≤ 104.

[input] array.integer b

Array of two integers - coordinates of the first rectangle's second vertex.

Guaranteed constraints:
b.length = 2,
-104 ≤ b[i] ≤ 104,
b[i] ≠ a[i].

[input] array.integer c

Array of two integers - coordinates of the second rectangle's first vertex.

Guaranteed constraints:
c.length = 2,
-104 ≤ c[i] ≤ 104.

[input] array.integer d

Array of two integers - coordinates of the second rectangle's second vertex.

Guaranteed constraints:
d.length = 2,
-104 ≤ d[i] ≤ 104,
d[i] ≠ c[i].

[output] integer

Area of the intersection of rectangles (0 if they don't intersect).
*/

function rectanglesIntersection(a, b, c, d) {

  var intersection = []

  for (var i = 0; i < 2; i++) {
    if (a[i] > b[i]) {
      var t = a[i];
      a[i] = b[i];
      b[i] = t;
    }
    if (c[i] > d[i]) {
      var t = c[i];
      c[i] = d[i];
      d[i] = t;
    }
    if (b[i] < c[i] || d[i] < a[i]) {
      return 0;
    }
    intersection.push(Math.min(b[i], d[i]) - Math.max(a[i], c[i]));
  }

  return intersection[0] * intersection[1];
}
