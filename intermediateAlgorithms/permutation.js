/* Given an array, find all permutations of its elements */

var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};


document.write(JSON.stringify(permute([5, 3, 7, 1])));
/* [[5,3,7,1],[5,3,1,7],[5,7,3,1],[5,7,1,3],[5,1,3,7],[5,1,7,3],[3,5,7,1],[3,5,1,7],[3,7,5,1],[3,7,1,5],[3,1,5,7],[3,1,7,5],[7,5,3,1],[7,5,1,3],[7,3,5,1],[7,3,1,5],[7,1,5,3],[7,1,3,5],[1,5,3,7],[1,5,7,3],[1,3,5,7],[1,3,7,5],[1,7,5,3],[1,7,3,5]] */
