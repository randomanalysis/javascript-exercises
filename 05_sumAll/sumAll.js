const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return "ERROR";
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";
    } else {
        let sum = 0
        for (i = Math.min(a,b); i < Math.max(a,b) + 1; i++) {
            sum = sum + i
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
