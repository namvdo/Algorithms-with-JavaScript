/*  Reverse the provided string

    Example: The provied string "Hello World" shoud return "dlroW olleH"

    There are three things that you should use you to reverse the string:

    String.prototype.split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    
    Array.prototype.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

    Array.prototype.reverse(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

    */

   function reverseString(str){
    // First of, you need to create a variable that turn your string into new array by using split() method
    let splitStr = str.split("");
    // Next, reverse your array just created by using reverse() method
    let reverseStr = split.reverse();
    // Then, Join all elements of your array into a string by using join() method
    let joinStr = reverseStr.join("");
    // After all, return the result
    return joinStr;
}
console.log(reverseString("Hello World"));

