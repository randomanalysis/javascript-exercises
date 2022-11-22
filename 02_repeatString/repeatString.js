const repeatString = function(phrase, repetitions) {
    if (repetitions < 0){
        return "ERROR";
    } else {
        let returnPhrase = ""
        for (let i = 0; i < repetitions; i++) {
            returnPhrase = returnPhrase + phrase
        }
        return returnPhrase;
    }
};

// Do not edit below this line
module.exports = repeatString;
