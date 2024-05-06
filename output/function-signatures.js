"use strict";
{
    let myFunc;
    // if we define a muFunc function later then we have to follow this signature
    let add;
    add = (a, b) => {
        return a + b;
    };
    console.log(add(4, 5));
    let calculation;
    calculation = (a, b, c) => {
        if (c === 'add') {
            return a + b;
        }
        else if (c === 'subtract') {
            return a - b;
        }
        return c + ' is not supported';
    };
    console.log(calculation(2, 3, 'add'));
    console.log(calculation(2, 3, 'multiply'));
}
