//  //                   Function are Object

// function hello(a,b,c)
// {
//     return arguments.length;
// }
// console.log(hello(1,2,3));                             //   3






//  //                Function Rest Parameters

// function add(...args)   // speard operator
// {
//     let sum = 0;
//     for(let i=0 ; i<args.length ; i++)
    
//         sum = sum + args[i];

//         return sum;
    
// };
// console.log(add(1,2,3,6));                             //  12






//  //                    Arguments Object

// function total() {
// 		let sum = 0;
// 		for (let i = 0; i < arguments.length; i++) {
// 					sum += arguments[i];
// 		}
// 		return sum;
// }

// console.log(total(1,2,3));                                   //  => 6






//   //                    Generator Function

// function* generate() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }     // "generator function" creates "generator object"

// let generator = generate();
// console.log(generator.next().value);                             // 1
// console.log(generator.next().value);                             // 2
// console.log(generator.next().value);                             // 3
// console.log(generator.next().value);                             // 4
// console.log(generator.next().value);                             // undefined






//  //                          this Keyword

// const person =
// {
//     'firstName' : "John",
//     'lastName'  : "Doe",
//     'age'       :  5566,

//     function() 
//     {
//             return this.firstName + " " + this.lastName;
//     }
// }
// console.log(function()) 
    


