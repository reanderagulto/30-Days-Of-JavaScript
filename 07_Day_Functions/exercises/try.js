function summation(){
    let sum = 0; 
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(summation(1, 2, 3, 4));