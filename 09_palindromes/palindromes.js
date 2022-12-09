const palindromes = function(s) {
    const lowerS = s.toLowerCase()
    const justLetters = lowerS.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const noSpaces = justLetters.replace(/ +/g, "");
    const asArray = noSpaces.split("");
    const reverseArray = asArray.reverse();
    const reverseString = reverseArray.join("")

    return noSpaces == reverseString;
};

// Do not edit below this line
module.exports = palindromes;
