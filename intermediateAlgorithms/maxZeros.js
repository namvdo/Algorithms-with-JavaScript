getZeroLength = zero => zero.split("").filter(v => v == '0').length

convertBase = (number, base) => {
    res = ""
    while (number > 0) {
        res += number % base;
        number = (number / base) | 0
    }

    return res.split("").reverse().join("")
}

maxZeros = n => {
    let max = 0,
        maxZ = 0;
    for (let i = 2; i <= (n > 36 ? 36 : n); i++) {
        let val = getZeroLength(convertBase(n, i));
        if (maxZ < val) {
            maxZ = val
            max = i
        }
    }

    return max
}