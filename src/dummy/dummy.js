/* eslint-env browser */

const add = (x, y) => x + y;

const log = func => (...args) => {
    console.log(...args)
    return func(...args)
}

const logAdd = log(add);

console.log(logAdd(1, 2));

var f = function (y) {
    return function (x) {
        return x + y;
    }
}

//var f1 = f(1);

console.log(f(3)(1));