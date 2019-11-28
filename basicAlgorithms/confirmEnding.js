// Check if ending of the first string is equal second string or not.

// Return true or false

// It can be solve with endsWith() method ES6, but you should use substring method instead.

// Define a function which takes 2 parameters, the first string and the target string.

function confirmEnding(str, target){

// Take a look at substring() method, create a if condition uses it to check.
if(target == str.substring(str.length - target.length)){
  return true;
}
else 
  return false;
}

console.log(confirmEnding("Let see the last characters", "characters")); // true


