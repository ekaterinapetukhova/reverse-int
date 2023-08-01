module.exports = function reverse(n) {
    const str = n.toString();
    let arr = str.split("");

    if (arr[0] === "-") {
        arr.shift();
    }

    const arrReverse = arr.reverse(),
        strReverse = arrReverse.join(""),
        nReverse = Number(strReverse);

    return nReverse;
};
