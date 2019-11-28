/* Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. 

Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/


function sumAll(arr) {
    var largestNum = arr.reduce((x, y) => Math.max(x, y));
    console.log(largestNum);
    var smallestNum = arr.reduce((x, y) => Math.min(x, y));
    console.log(smallestNum);
    var sumUp = largestNum + smallestNum;
    console.log(sumUp);
    var newNum = 0;
    for (let i = smallestNum + 1; i < largestNum; i++) {
        console.log(i)
        newNum += i;
        console.log(newNum)
    }
    var result = newNum + sumUp;
    console.log(result);
    return result;
}

sumAll([1, 4]);
/* First you need to find out the largest number and the smallest number
   by using reducing method to convert number and Math.max, Math.min to get
   the numbers we want. Sum up two number together and log see the result to
   make sure you are on right track.
   
   Then create a new variable which equals to 0 then create a loop that return
   the sum of numbers between the smallest and largest numbers
   
   Finally, combine them together and get the result, don't for get to return the variable.*/