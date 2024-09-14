const palindromes = function (string) {
    //Remove all non alphanumeric characters, underscores and white space then convert to lower case.
    let str = string.replace(/[^\w]|_|\s+/g, ``).toLowerCase(); 
    reverse = str.split(``).reverse().join(``);
    if (reverse === str) {return true;}
    else return false;
};

// Do not edit below this line
module.exports = palindromes;

//Remove spaces
//Reverse string
//Check if equal to input