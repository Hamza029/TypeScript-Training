{
  // the types will be fixed for array indices

  let a: [number, string, object] = [29, 'Hamza', { ok: true }];

  console.log(a);

  // a[0] = 'Hamza'; // error: Type 'string' is not assignable to type 'number'

  //   a[1] = 29; // error: Type 'number' is not assignable to type 'string'
}
