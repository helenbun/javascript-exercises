const removeFromArray = function(array, ...toRemove) {
    for (i in toRemove){
        //Find if item in toRemove is in the array
        while(array.includes(toRemove[i])){
            if (array.indexOf(toRemove[i]) === 0){
                array.shift();
            }
            else if (array.indexOf(toRemove[i]) === (array.length)-1){
                array.pop();
            }
            else {
                let index = array.indexOf(toRemove[i]);
                let firstArray = array.slice(0,index);
                let secondArray = array.slice(index);
                secondArray.shift();
                array = firstArray.concat(secondArray);
            }
        };
    }
    return(array);
};

// Do not edit below this line
module.exports = removeFromArray;