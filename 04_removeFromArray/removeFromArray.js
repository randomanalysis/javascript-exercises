const removeFromArray = function(array, ...theArgs) {
    for (const arg of theArgs) {
        const index = array.indexOf(arg);
        if (index !== -1) {
            array.splice(index, 1);
        } 
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
