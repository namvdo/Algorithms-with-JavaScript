const exponentialBySquaring = (base, power) => {
    let rs = 1;
    while (power > 0) {
        if (power % 2 == 0) {
            power /= 2; // 2
            base *= base; // 400 * 400
        } else {
            power -= 1; // 4 1
            rs *= base; // 20 // 20 * 400 * 400
            power /= 2; // 2 0
            base *= base; // 400 400 * 400
        }
    }
    return rs;
}
console.log(exponentialBySquaring(20, 5));