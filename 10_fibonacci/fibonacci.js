const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    else {
        let fibSeq = [0,1];
        if (num == 0 | num == 1) {
            return fibSeq.at(num);
        }
        else
            while (fibSeq.length <= num) {
                fibSeq.push((fibSeq.at(-2)+fibSeq.at(-1)));
            }
            return(fibSeq.at(-1));
    };
}

// Do not edit below this line
module.exports = fibonacci;

//Generate the fibonacci sequence until the required number
//Return the number