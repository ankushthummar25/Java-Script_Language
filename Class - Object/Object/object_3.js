const person = {
    firstName: "John",
    lastName : "Doe",
    age      : 50,
    eyeColor : "blue"
};

console.log(person);  // age: 50 , eyeColor : "blue" , firstName: "John" , lastName : "Doe"






//  //   =>         let a = person.age; => console.log(a);   Method             






//  // =>                        Adding Properties

// let a = person.address = {
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


// let b = person.hobies = ("playing");
// console.log(person);
/*
    age        : 50
    eyeColor   : "blue"
    firstName  : "John"
    hobies     : "playing"
    lastName   : "Doe"
*/


// let c = person.hobies=["Playing","Reading","Movie"];
// console.log(person);
/*
    age       : 50
    eyeColor  : "blue"
    firstName : "John"
    hobies    : (3) ['Playing', 'Reading', 'Movie']
    lastName  : "Doe"
*/






//  // =>                           Deleting Properties


let d = delete person.firstName;
console.log(person);
/*
    age        : 50
    eyeColor   : "blue"
    lastName   : "Doe"
*/