{
  // explicit typing
  let a: string;
  let b: number;

  a = 'Hamza';
  b = 29;

  //   a = 29; // error: Type 'number' is not assignable to type 'string'
  //   b = 'Hamza'; // error: Type 'string' is not assignable to type 'number'

  let ar: string[] = []; // array of string

  ar.push('Hamza');
  console.log(ar);

  // union type
  let ar2: (string | number)[] = [];
  ar2.push('Hamza');
  ar2.push(29);
  console.log(ar2);

  let obj: {
    name: string;
    age: number;
    adult: boolean;
  };

  obj = {
    name: 'Hamza',
    age: 24,
    adult: true,
  };

  console.log(obj);

  //   obj = [1, 2, 3]; // error

  let obj2: object;
  obj2 = [1, 2, 3]; // array is also an object
  console.log(obj2);
}
