const reverseString = function (string) {
    return string.split("").reverse().join("");
  };

const palindromes = function (string) {
    string = string.toLowerCase().replace(/[\W_]/g, '');
    revString = reverseString(string);
    return string === revString;
};



// Do not edit below this line
module.exports = palindromes;
