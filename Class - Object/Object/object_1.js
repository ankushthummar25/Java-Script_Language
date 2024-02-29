// using Object Literal
const person = {
    firstName: "John",
    lastName : "Doe",
    age      : 50,
    eyeColor : "blue"
};

console.log(person);  // age: 50 , eyeColor : "blue" , firstName: "John" , lastName : "Doe"




//  // =>                         Object Properties

console.log(person.firstName);                              // John

console.log(person["lastName"]);                            // Doe

let a = person.age;
console.log(a);                                             // 50





//  //   =>         console.log(person.firstName);  Method             






//  // =>                        Adding Properties



// person.address = {
//         city    : "Surat",
//         state   : "Gujarat",
//         Country : "India" 
// };
// console.log(person);
/*
address: 
    Country: "India"
    city   : "Surat"
    state  : "Gujarat"

    age      : 50
    eyeColor : "blue"
    firstName: "John"
    lastName : "Doe"
*/


// person.hobies = ("playing");
// console.log(person);
/*
    age        : 50
    eyeColor   : "blue"
    firstName  : "John"
    hobies     : "playing"
    lastName   : "Doe"
*/


// person.hobies=["Playing","Reading","Movie"];
// console.log(person);
/*
    age       : 50
    eyeColor  : "blue"
    firstName : "John"
    hobies    : (3) ['Playing', 'Reading', 'Movie']
    lastName  : "Doe"
*/






//  // =>                           Deleting Properties


delete person.firstName;
console.log(person);
/*
    age        : 50
    eyeColor   : "blue"
    lastName   : "Doe"
*/