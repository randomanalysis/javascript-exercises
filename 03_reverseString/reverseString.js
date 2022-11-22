const reverseString = function(phrase) {
    let phraseAsArray = phrase.split("")
    phraseAsArray.reverse()
    let returnPhrase = phraseAsArray.join("")
    return returnPhrase
};

// Do not edit below this line
module.exports = reverseString;
