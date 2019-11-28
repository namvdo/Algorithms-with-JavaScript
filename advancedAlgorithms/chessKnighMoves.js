/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
chessKnightMoves(cell) = 2.



For cell = "c2", the output should be
chessKnightMoves(cell) = 6.



Input/Output

[execution time limit] 4 seconds (js)

[input] string cell

String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

Guaranteed constraints:
cell.length = 2,
'a' ≤ cell[0] ≤ 'h',
1 ≤ cell[1] ≤ 8.
*/

function chessKnightMoves(cell) {
    var possibleCoordinates = [];
    var xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var cellX = xCoordinates.indexOf(cell[0]) + 1; //The X Position
    var cellY = parseInt(cell[1]); //The Y Position

    //Find all possible X Positions
    var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })

    //Find all possible Y Positions
    var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })

    //We now have 2 seperate arrays: One for X Positions, One for Y Positions.
    //Go thru every combination possible and if it is a valid position then push it
    //to the possible coordinates array - if not present already.
    //The trick is to validate the position pair (X, Y) by making sure that 
    //the net X distance plus net Y distance is 3
    for (var i = 0; i < cellXpositions.length; i++) {
        for (var j = 0; j < cellYpositions.length; j++) {
            if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
                if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
                    possibleCoordinates.push([cellXpositions[i], cellYpositions[j]]);
                }
            }
        }
    }
    return possibleCoordinates.length;
}