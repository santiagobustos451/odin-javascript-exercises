const fibonacci = function(n) {
    if(n < 0)return "OOPS";

    f = [];
    for(let i = 0; i < n; i++){
        nextNumber = f.length >= 2 ? f[f.length-1] + f[f.length-2] : 1;
        f.push(nextNumber);
    }
    return f[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
