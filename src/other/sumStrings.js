
function sumStrings(a,b) {
    const digit_a = a.replace(/\b0+/g, "").split("").reverse();
    const digit_b = b.replace(/\b0+/g, "").split("").reverse();

    let res = [];

    const length = digit_a.length > digit_b.length ? digit_a.length: digit_b.length;

    let carried = 0;

    for(let i = 0 ; i < length; i++){
        let val1 = digit_a[i] ? parseInt(digit_a[i]) : 0;
        let val2 = digit_b[i] ? parseInt(digit_b[i]) : 0;

        let sum = val1 + val2 + carried;
        carried = Math.floor(sum / 10);
        sum = sum % 10;
        res.push(sum);
    }

    carried && res.push(carried);
    return res.reverse().join("");
}

module.exports = sumStrings;