const sumAll = function(a, b) {
    //check negative, numbers, and integers: a,b <0, typeof !==, Number.isInteger()
    if (a < 0 || b < 0) return "ERROR"//negative
    if (typeof a !== "number" || typeof b !== "number") return "ERROR"//non-number 
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"//non-integer
    //need define high and low values
    const min = Math.min(a, b);//don't know which is larger within a range
    const max = Math.max(a, b);
    //loop for summing the variables
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
