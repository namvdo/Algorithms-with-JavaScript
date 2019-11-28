// Basic Algorithm Scripting: Finders Keepers

/* Create a function that looks through an array (first argument) 

   and returns the first element in the array that passes a truth test (second argument). 

   If no element passes the test, return undefined.
*/

function findElement(arr, func) {
    let num = 0;
// Firstly, you need to create a loop to look through every element in an array.

    for(let i=0; i<arr.length;i++){
/* After that, num is passed to this function, you need to set it to the elements you want

to check with the function */

    num = arr[i];
/*  
   The pre-defined function already checks each number for us, 
so if it is “true”, we return that num.
*/

    if(func(num)){
      return num;
    }
    }
//  If none of the numbers in the array pass the function’s test, we return undefined.
    return undefined;
  }
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
