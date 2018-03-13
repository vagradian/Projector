function sum(x, y) {

    if (typeof x === 'number' && typeof y === 'number') {
        var result = x + y;

        return result;
    }

    else {
        console.log("type a number!");
    }
}


function logger(arg) {
    console.log("typeof: " + typeof arg, "\nvalue: " + arg);
}


function sum(x, y, logger) {

    if (typeof x === 'number' && typeof y === 'number') {
        var result = x + y;
        logger(result);
    }

    else {
        console.log("you can use only numbers!");
    }
}


function mult(x, y) {

    if (typeof x === 'number' && typeof y === 'number') {
        var result = x * y;
        console.log(result);
    }

    else {
      console.log("you can't multiple strings");
    }
}


function compute(x, y, action, logger) {

    action(x, y, logger);
}

compute(5, 2, sum, logger);


function createSummator(x) {

    return function (y) {
        return x + y;
    }
}

var addTwo = createSummator(7);

console.log(addTwo(6));
