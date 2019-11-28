// Basic Algorithm Scripting: Boo who

/* Check if a value is classified as a boolean primitive. 

   Return true or false.

   typeof: The typeof operator returns a string indicating 

   the type of the unevaluated operand. 

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

function booWho(bool){
    return typeof bool == 'boolean';
}
console.log(booWho(2));

