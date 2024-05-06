{
  enum RType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATED,
    FORBIDDEN,
  }

  interface APIResponse<T> {
    status: number;
    type: number;
    data: T;
  }

  const response1: APIResponse<object> = {
    status: 200,
    type: RType.SUCCESS,
    data: {
      name: 'Test',
      something: 300,
    },
  };

  const response2: APIResponse<object> = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: {
      name: 'Test',
      something: 300,
    },
  };

  console.log(response1);
  console.log(response2);
}
