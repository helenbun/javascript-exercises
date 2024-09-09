const reverseString = function(string) {
    let i = string.length -1;
    let reverse = "";
    for (i; i >= 0; i--) {
        reverse = reverse + string.at(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
