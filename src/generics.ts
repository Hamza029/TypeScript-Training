{
  const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
  };

  let user = addID({ name: 'Mashrafee', age: 40 });

  //   addID('Mashrafee'); // error: Argument of type 'string' is not assignable to parameter of type 'object'
}

{
  type playerType = {
    name: string;
    age: number;
  };

  const addID = <T extends playerType>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
  };

  let user = addID({ name: 'Mashrafee', age: 40 });
}

{
  interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
  }

  const response1: APIResponse<object> = {
    status: 200,
    type: 'good',
    data: {
      name: 'Test',
      something: 300,
    },
  };

  const response2: APIResponse<string> = {
    status: 200,
    type: 'good',
    data: 'test',
  };
}
