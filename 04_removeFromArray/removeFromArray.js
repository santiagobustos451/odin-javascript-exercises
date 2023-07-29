const removeFromArray = function(array, ...elements) {
    elements.forEach(element => {
        indexToRemove = array.indexOf(element);
        if(indexToRemove != -1){
            array.splice(indexToRemove, 1);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
