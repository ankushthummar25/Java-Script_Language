// Arrow Function 

// function add(a,b)
// {
//     return a + b;
// }

// let add = (a,b) => {
//     return a+b;
// }

let add = (a,b) => a + b;
console.log(add(12,65));





// Function Constructor

let hello = new Function("a" , "b" , "return a * b");
console.log(hello(12,5));