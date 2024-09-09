const sumAll = function(start, end) {
    //Check that start and end are integers
    if (!Number.isInteger(start) || !Number.isInteger(end)) {return `ERROR`}
    //Check that start and end are positive
    if (start < 0 || end < 0) {return `ERROR`}
    else {
        let high = Math.max(start, end);
        let low = Math.min(start,end);
        let total = 0;
        for (let i = low; i<= high; i++) {
            total = total + i;
        }
        return total;
    };
}
// Do not edit below this line
module.exports = sumAll;
