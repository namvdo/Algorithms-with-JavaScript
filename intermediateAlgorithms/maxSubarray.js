/*
A contiguous subarray of array A is a subset of array A consecutive elements.

Given an array of integers inputArray, find the contiguous subarray which has the maximum sum. Return that sum.

Example

For inputArray = [-1, 7, -2, 3, 4, 0, 1, -1], the output should be maxSubarray(inputArray) = 13.
It is the sum of the subarray [7, -2, 3, 4, 0, 1] and no other contiguous subarray has a larger sum.

For inputArray = [-1, -2, -5, -1], the output should be
maxSubarray(inputArray) = 0.
The contiguous subarray with the largest sum is [], because all others will have negative sum.

Input/Output

[execution time limit] 0.5 seconds 

[input] array.integer inputArray

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10000,
-10000 ≤ inputArray[i] ≤ 10000.

[output] integer

The maximum contiguous subarray sum.
*/
/* Let's take an example: 
 Lets take the example:
    {-2, -3, 4, -1, -2, 1, 5, -3}

    max_so_far = max_ending_here = 0

    for i=0,  a[0] =  -2
    max_ending_here = max_ending_here + (-2)
    Set max_ending_here = 0 because max_ending_here < 0

    for i=1,  a[1] =  -3
    max_ending_here = max_ending_here + (-3)
    Set max_ending_here = 0 because max_ending_here < 0

    for i=2,  a[2] =  4
    max_ending_here = max_ending_here + (4)
    max_ending_here = 4
    max_so_far is updated to 4 because max_ending_here greater 
    than max_so_far which was 0 till now

    for i=3,  a[3] =  -1
    max_ending_here = max_ending_here + (-1)
    max_ending_here = 3

    for i=4,  a[4] =  -2
    max_ending_here = max_ending_here + (-2)
    max_ending_here = 1

    for i=5,  a[5] =  1
    max_ending_here = max_ending_here + (1)
    max_ending_here = 2

    for i=6,  a[6] =  5
    max_ending_here = max_ending_here + (5)
    max_ending_here = 7
    max_so_far is updated to 7 because max_ending_here is 
    greater than max_so_far

    for i=7,  a[7] =  -3
    max_ending_here = max_ending_here + (-3)
    max_ending_here = 4
*/
function maxSubarray(inputArray){
    let max = 0; // keep track of maximum sum contiguous segment among all positive segments 
        max_end = 0; // look for all positive contiguous segments of the array 
    for(let i = 0; i < inputArray.length; i++){ // loop through array
        max_end = max_end + inputArray[i]; // 
        if(max_end <0){
            max_end = 0;
        }else if(max < max_end){
            max = max_end
        }
    }
    return max
}
