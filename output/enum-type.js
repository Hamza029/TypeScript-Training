"use strict";
{
    let RType;
    (function (RType) {
        RType[RType["SUCCESS"] = 0] = "SUCCESS";
        RType[RType["FAILURE"] = 1] = "FAILURE";
        RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
        RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
    })(RType || (RType = {}));
    const response1 = {
        status: 200,
        type: RType.SUCCESS,
        data: {
            name: 'Test',
            something: 300,
        },
    };
    const response2 = {
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
