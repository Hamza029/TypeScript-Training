{
  let playerName = 'Mashrafee';
  let age = 35;

  console.log(playerName, age);

  //   playerName = 34; // error: Type 'number' is not assignable to type 'string'.
  age = 34; // ok

  // assigning value later

  let playerName2;
  playerName2 = 'Sakib';
  console.log(playerName2);
  playerName2 = 25; // doesn't strict type to string this time
  console.log(playerName2);

  // function

  const multiply = (a: number, b: number) => {
    return a * b;
  };

  console.log(multiply(4, 5));

  // array

  let fruits = ['apple', 'banana', 'orange'];

  fruits.push('pinapple'); // ok
  //   fruits.push(34); // error: Argument of type 'number' is not assignable to parameter of type 'string'

  let fruits2 = ['apple', 34, true];

  fruits2.push('banana');
  fruits2.push(30);
  fruits2.push(false);

  //   fruits2.push({ name: 'test' }); // error: Argument of type '{ name: string; }' is not assignable to parameter of type 'string | number | boolean'

  // object

  let person = {
    name: 'Mashrafee',
    age: 35,
    isCaptain: true,
  };

  //   person.country = 'Bangladesh'; // error: Property 'country' does not exist on type '{ name: string; age: number; isCaptain: boolean; }
}
