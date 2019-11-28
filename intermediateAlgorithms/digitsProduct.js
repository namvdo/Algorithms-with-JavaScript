/*
Given an integer product, find the smallest positive interger (i.e. greater than 0) that the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be digitsProduct(product) = 26;
For product = 19, the output should be digitsProduct(product) = -1. 
*/

function digitsProduct(product) {
    if (product < 10) {
        return product > 0 ? product : 10;
    }
    let x = "";
    for (let i = 9; i > 1; i--) {
        while (product % i == 0) {
            product /= i;
            x = String.fromCharCode('0'.charCodeAt() + i) + x;
            console.log(x)
        }
    }
    return product != 1 ? -1 : parseInt(x);
}
console.log(digitsProduct(12));