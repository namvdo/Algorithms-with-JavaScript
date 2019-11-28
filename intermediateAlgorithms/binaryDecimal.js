const bin = num => {
    let res = "";
    while (num > 0) {
        res = num % 2 + res;
        num = Math.floor(num / 2);
    }
    return res;

}
console.log(bin(240));