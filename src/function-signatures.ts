{
  let myFunc: () => void;
  // if we define a muFunc function later then we have to follow this signature

  let add: (x: number, y: number) => number;

  add = (a: number, b: number) => {
    return a + b;
  };

  console.log(add(4, 5));

  let calculation: (x: number, y: number, z: string) => number | string;

  calculation = (a: number, b: number, c: string) => {
    if (c === 'add') {
      return a + b;
    } else if (c === 'subtract') {
      return a - b;
    }
    return c + ' is not supported';
  };

  console.log(calculation(2, 3, 'add'));
  console.log(calculation(2, 3, 'multiply'));
}
