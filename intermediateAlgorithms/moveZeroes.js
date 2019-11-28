var moveZeroes = function(nums) {
    let zeroCount = 0;
    let newOrder = [];
    nums.forEach(n => {
        if (n != 0) {
            newOrder.push(n);
        }
    })
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            zeroCount++;
        }
    }
    while (zeroCount > 0) {
        newOrder.push(0);
        zeroCount--;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = newOrder[i];
    }
    return nums;
};

/*
var moveZeroes = function(nums) {
    let rs = nums.map((value, index) => {
        if(value == 0){
         nums.splice(nums.indexOf(value), 1);
         return nums.push(value);
        }});
};
*/


var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[count++] = nums[i];
        }
    }
    while (count < nums.length) {
        nums[count++] = 0;
    }
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12])) // [ 1, 3, 12, 0, 0 ]