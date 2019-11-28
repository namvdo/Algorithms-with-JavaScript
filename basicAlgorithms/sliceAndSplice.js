/* Basic Algorithm Scripting: Slice and Splice

You need to do some research about Slice and Splice methods before doing this excersice.

You are given two arrays and an index.

Use the array methods slice and splice to copy each element
of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. 
The input arrays should remain the same after the function runs.

It's a little bit confusing, here is the example that make you
what will you have to do.

Our goal is to take all of the elements from arr1
and insert them into arr2 starting with index position n.

At the same time we must ensurethat neither arr or arr2 have been mutated.

frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

index position n is 1, insert arr1 into arr2 at index 1 (n) of arr2,
arr2 = ["a", "b"] arr2[1] = "b" so ["a", 1, 2, "b"].
*/

// First, we need to define a function which takes 3 parameters: arr1, arr2 and n(index)

function frankenSplice(arr1, arr2, n){
// Slice arr2 and assign it to a variable
// You need to slice arr2 and assign it to a new variable because
// it will be isolated from the input array as the demand of this instruction.
let insertedArray = arr2.slice();
// Create a for loop that iterate through arr1 and splice it with n(index)
// beginning of inserting, replace 0 element and insert elements from arr1
// to variable insertedArray;
for(let i = 0; i < arr1.length; i++){
    insertedArray.splice(n, 0, arr1[i]);
    n++;
// You need to increase n because it will help you keep continuing the insertion.
// Once the for loop's condition is false, n will be stopped.
}
// Return the result;
return insertedArray;
}
// Check the result
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
