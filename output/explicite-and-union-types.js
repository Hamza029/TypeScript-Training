"use strict";
{
    // explicit typing
    let a;
    let b;
    a = 'Hamza';
    b = 29;
    //   a = 29; // error: Type 'number' is not assignable to type 'string'
    //   b = 'Hamza'; // error: Type 'string' is not assignable to type 'number'
    let ar = []; // array of string
    ar.push('Hamza');
    console.log(ar);
    // union type
    let ar2 = [];
    ar2.push('Hamza');
    ar2.push(29);
    console.log(ar2);
    let obj;
    obj = {
        name: 'Hamza',
        age: 24,
        adult: true,
    };
    console.log(obj);
    //   obj = [1, 2, 3]; // error
    let obj2;
    obj2 = [1, 2, 3]; // array is also an object
    console.log(obj2);
}
