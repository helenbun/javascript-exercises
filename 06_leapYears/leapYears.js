const leapYears = function(year) {
    if (year % 4 !== 0) {
        return false;
    }
    else {
        if (year % 100 === 0 && year % 400 === 0) {
            return true;
        }
        else if (year % 100 === 0 && year % 400 !==0) {
            return false;
        }
        else return true;
    }
};

// Do not edit below this line
module.exports = leapYears;

//Divisible by 4?
//No - not a leap year
//Yes -
//Divisible by 100?
//Yes and 400 - leap year
//Yes and not 400 - not a leap year
//No - leap year
