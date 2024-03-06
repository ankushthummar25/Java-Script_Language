// Javascript "use strict"

// In JavaScript, 'use strict'; status that the code should be executed in 
// 'strict node'. This makes it easier good and secure JS code.

// "use strict";

{
    // myVariable = 0;
    // console.log(myVariable)
}

// Here, myValues is created without declaring. This works as a global variable 
// in JavaScript. However, if you use this in strict mode, the program will throw 
// an error. 








// Strict Mode in Variable

// In strict mode, using a variable without declaring it throws an error.

{
    // console.log("some code");

    //  // 'use strict' is ignord
    // "use strict";

    // x = 21;  // does not throw an error
    //      console.log(x);
}

// Strict Mode in Function
// You can also use Strict mode inside a functon.

{
    // myVariable = 9;
    // console.log(myVariable);    // 9

    // function hello() {

    //         // applicable only for this function
    //         'use strict';

    //         string = 'hello';    // throws an error
    // }

    // hello();
}

// If you use 'use strict'; inisde a function, the code inside the function
// will be in strict node.

{
    // function hello() {
    //     string = 'hello';   // throw an error
    // }

    // hello();

    // // Note : Strict mode doesn't apply to block statements with {} braces.
}


// Things Not Allowed in Strict Mode

// 1. Undeclared variable is not allowed.
{
    // 'use strict';

    // a = 'hello';    // thros an error
}



// 2. Undeclared objects arenot allowed.
{
    // 'use strict';

    // person = {name: 'Carle', abe: 25};    // throws an error
}



// 3. Deleting an object is not allowed.
{
    // 'use strict';

    // let person = {name: 'Carle'};

    // delete person ;    // throws an error
}



// 4. Duplicating a parameter name is not allowed.
{
    // "use strict";

    // function hello(p1,p2) { console.log('hello')};    // throws an error

    // hello();
}



// 5. Assigning to a non-writable prperty is not allowed.
{
    // 'use strict';

    // let obj1 = {};

    // object.defineProperty(obj1, 'x', { value:42, writable: false});

    //  // assignment to a non-writable property
    // obj1.x = 9;     // throws an error
}



// 6. Assigning to a getter-only property is not allowed.
{
    // 'use strict';

    // let obj2 = { get x() { return 17; } };

    //   // assignment to a getter-only property
    // obj2.x = 5;      // throws an error
}



// 7. Assigning to a new property on a non-extensible object is not allowed.
{
    // 'use strict';

    // let obj = {};
    // object.preventExtensions(obj);
    //     // Assignment to a new property on a non-extensible object
    // obj.newValue = 'new value';      // throws an error 
}



// 8. Octal syntax is not allowed.
{
    // 'use strict';
    // let a = 010;       // throws an error 
}



// 9. The Variable name arguments and eval are not allowed.
{
    // 'use strict';

    // let argument = 'hello';         // throws an error

    // let eval = 44;
}



// 10. You cannot also use these reverved keywords in strict mode.

// implements interface let package privateprotected public static yield


//Benefits of Strict Mode

// The use of strict mode:

// help to write a cleaner code
// Changes previously accepted silent error (bad syntax) into real errors and throw an error message
// Makes it easier to write "secure" JavaScript
