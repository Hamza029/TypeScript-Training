{
  const userDetails = (
    id: string | number,
    user: { name: string; age: number }
  ) => {
    console.log(
      `User id is ${id}, name is ${user.name} and age is ${user.age}`
    );
  };

  const sayHello = (user: { name: string; age: number }) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
  };

  // these are very large type checking
  // also in sayHello and userDetails function we have same type of parameter declared twice which is redundant
}

{
  // we can remove these redundant type declaring with type aliasing

  type stringOrNum = string | number;
  type userType = { name: string; age: number };

  const userDetails = (id: stringOrNum, user: userType) => {
    console.log(
      `User id is ${id}, name is ${user.name} and age is ${user.age}`
    );
  };

  const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
  };
}
