function add(num, num2) {
    // console.log(arguments);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];    
        sum = sum + element;
    }
    return sum;
}

var result = add(12, 32, 21, 32, 75);
console.log(result);
