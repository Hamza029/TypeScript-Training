"use strict";
{
    const addID = (obj) => {
        let id = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), { id });
    };
    let user = addID({ name: 'Mashrafee', age: 40 });
    //   addID('Mashrafee'); // error: Argument of type 'string' is not assignable to parameter of type 'object'
}
{
    const addID = (obj) => {
        let id = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), { id });
    };
    let user = addID({ name: 'Mashrafee', age: 40 });
}
{
    const response1 = {
        status: 200,
        type: 'good',
        data: {
            name: 'Test',
            something: 300,
        },
    };
    const response2 = {
        status: 200,
        type: 'good',
        data: 'test',
    };
}
