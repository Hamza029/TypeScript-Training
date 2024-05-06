"use strict";
{
    const userDetails = (id, user) => {
        console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
    };
    const sayHello = (user) => {
        console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
    };
    // these are very large type checking
    // also in sayHello and userDetails function we have same type of parameter declared twice which is redundant
}
{
    const userDetails = (id, user) => {
        console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
    };
    const sayHello = (user) => {
        console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
    };
}
