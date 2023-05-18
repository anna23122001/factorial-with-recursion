'use strict'
function getFactorial(factorial){
    if(factorial <= 0){
        return 1;
    } 
    return factorial * getFactorial(factorial-1);
}
console.log(getFactorial(-5))