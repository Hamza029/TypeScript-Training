"use strict";
{
    let myFunc = () => {
        console.log('Hello');
    };
    // explicitly mention Function type
    let myFunc2;
    myFunc2 = () => {
        console.log('Hello');
    };
    myFunc2();
    //   myFunc2 = 5; // error: Type 'number' is not assignable to type 'Function'
}
{
    // define type of function parameter
    const myFunc = (a, b) => {
        console.log(`Hello ${a} and ${b}`);
    };
    myFunc('Hamza', 'Nahin');
}
{
    // optional parameter
    const myFunc = (a, b, c = 'ok') => {
        // here b will be undefined if not given an argument
        console.log(`Hello ${a} and ${b}`);
        console.log(c);
    };
    myFunc('Hamza');
}
{
    const myFunc = (a, b) => {
        return a + b;
    };
    // here ts infers return type as string
    // explicitly mention return type
    const myFunc2 = (a, b) => {
        return a + b;
    };
}
