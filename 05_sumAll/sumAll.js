const sumAll = function(a, b) {
    if(a < 0 || typeof a != "number"|| b < 0 || typeof b != "number") return "ERROR";

    let [start,end] = a < b ? [a,b]:[b,a];
    let result = 0;
    for(let i = start; i <= end; i++){
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
