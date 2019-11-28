/*  Find the Longest Word in a String

    Return the length of the longest word in the provided sentence

    Your result should return a number

    For instance, the sentence "I'd love JavaScript" should return 10

    */

// First define a function which takes one parameter.
function findLogestWordLength(str){
// In order to check the length of a string, you need to split the string into an array.
    let splitStr = str.split(" ");
// [This, just, is, a, sample, sentence];
    
// Define a new variable and assign it to 0.
    let longestLength = 0;
// Now you have to loop through an array and compare slitStr.length with longestLength
// 1st time of iteration, splitStr[0].length = 3 > 0 (longestLength's value) so execute something inside 
// the if condition.
// And continue looping through array to the last index, if the splitStr[index].length < longestLength, 
// the if condition will not be executed and go back to the loop and looping to the end to make sure
// find out the longest string.
    for (let i = 0; i < splitStr.length; i++){
        if(splitStr[i].length > longestLength){
        longestLength = splitStr[i].length;
        }
    }
// Return the result.
    return longestLength;
}

console.log(findLogestWordLength("This just is a sample sentence"));


