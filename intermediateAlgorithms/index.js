// any monatary amout starting from 8 can be paid by using coins of denominations 3 and 5.

const change = amount => {
    let rs = [];
    if (amount < 8) return 0;
    if (amount == 8) {
        return [3, 5];
    }
    if (amount == 9) {
        return [3, 3, 3];
    }
    if (amount == 10) {
        return [5, 5];
    }
    rs = change(amount - 3);
    rs.push(3)
    return rs;
}
console.log(change(59)) // [ 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ]

function x(n) {
    i = 1;
    total = 1;
    while (i < n) {
        i = i + 1;
        total = total + i;
    }
    return total;
}
console.log(x(6));