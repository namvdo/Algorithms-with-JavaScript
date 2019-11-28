/*  Factorialize a Number

    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

    Only integers greater than or equal to zero will be supplied to this function

    */
function factorialize(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}
console.log(factorialize(5));


