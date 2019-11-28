/*
Given the adjacency matrix of the connected undirected graph with no loops or multiple edges, find the distance between the two specified vertices.

Example

For

matrix = [[false, false, true],
          [false, false, true],
          [true, true, false]]
vertex1 = 0, and vertex2 = 1, the output should be
bfsDistancesUnweightedGraph2(matrix, vertex1, vertex2) = 2.

Here's what the given graph looks like:



Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

Adjacency matrix of the given graph.

Guaranteed constraints:
3 ≤ matrix.length ≤ 10,
matrix[i].length = matrix.length.

[input] integer vertex1

Guaranteed constraints:
0 ≤ vertex1 ≤ matrix.length - 1.

[input] integer vertex2

Guaranteed constraints:
0 ≤ vertex2 ≤ matrix.length - 1,
vertex2 ≠ vertex1.

[output] integer
*/
function bfsDistancesUnweightedGraph2(matrix, vertex1, vertex2) {

  var visited = [],
      queue = [],
      distance = [];

  for (var i = 0; i < matrix.length; i++) {
    visited.push(false);
    distance.push(0);
  }

  visited[vertex1] = distance;
  queue.push(vertex1);
  while (queue.length) {
    var currentVertex = queue.shift();
    visited[currentVertex] = true;
    for (var nextVertex = 0; nextVertex < matrix.length; nextVertex++) {
      if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
        visited[nextVertex] = true;
        distance[nextVertex] = distance[currentVertex] + 1;
        queue.push(nextVertex);
      }
    }
  }

  return distance[vertex2];
}
