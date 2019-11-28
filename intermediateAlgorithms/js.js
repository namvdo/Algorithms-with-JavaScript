const popularWord = x => {
    let a = x.replace(/[^\w\s]/gi, '').toLowerCase().split(" ").sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    let map = new Map();
    for (let i = 0; i < a.length; i++) {
        map.set(a[i], 0);
    }
    for (let i = 0; i < a.length; i++) {
        if (map.has(a[i])) {
            map.set(a[i], map.get(a[i]) + 1);
        }
    }
    for (let i of map.keys()) {
        if (i == ' ' || i == '') {
            map.delete(i);
        }
    }
    console.log(map);
    let max = 0;
    let maxA = [];
    for (let i of map.values()) {
        if (i >= max) {
            max = i;
        }
    }
    let rs = [...map].find(([key, val]) => val == max)[0]
    console.log(rs)

    return rs;
}
console.log(popularWord('what  -do  you      ---do?'));

function removeSpecials(str) {
    var lower = str.toLowerCase();
    var upper = str.toUpperCase();

    var res = "";
    for (var i = 0; i < lower.length; ++i) {
        if (lower[i] != upper[i] || lower[i].trim() === '')
            res += str[i];
        if (lower[i] == '-') {
            res += ' ';
        }
    }
    return res;
}