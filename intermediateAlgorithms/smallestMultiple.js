function smallestMultiple(left, right) {
    let num = right;
    while (1) {
        let count = 0;
        for (let i = left; i <= right; i++) {
            if (num % i == 0) {
                count++;
            }
            if (count == (right - left + 1)) {
                return num;
            }
        }
        num++;
    }
}
console.log(smallestMultiple(2, 4));