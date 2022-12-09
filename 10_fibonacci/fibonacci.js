const fibonacci = function(x) {

    if (typeof x == "string") {
        x = parseInt(x);
    }

    if (x < 0) {
        return "OOPS";
    }
    
    const sequence = [];

    for (i = 0; i < x; i++) {
        if (i <= 1) {
            sequence.push(1);
        }
        else {
            sequence.push(sequence[0] + sequence[1])
            sequence.shift();
        }
    }

    return sequence.pop();

};

// Do not edit below this line
module.exports = fibonacci;
