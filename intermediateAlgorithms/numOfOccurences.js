const numOfOccurences = arr => {
    let a = [],
        b = [],
        prev;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i];
    }
    return [a, b];

}
console.log(numOfOccurences([2, 2, 2, 2, 2, 4, 5, 5, 5, 9]));