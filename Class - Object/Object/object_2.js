
const person = {
    firstName: "John",
    lastName : "Doe",
    age      : 50,
    eyeColor : "blue"
};

console.log(person);  // age: 50 , eyeColor : "blue" , firstName: "John" , lastName : "Doe"



//  //  =>             console.log(person["lastName"]);      Method



//  // =>                        Adding Properties

// person["Address"] = {
//     city : "Surat",
//     state : "Gujarat",
//     country : "India"
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


// person["Hobies"]=("Playing");
// console.log(person);
/*
    Hobies   : "Playing"
    age      : 50
    eyeColor : "blue"
    firstName: "John"
    lastName : "Doe"
*/


// person["Hobies"] = ["Playing" , "Movie" , "Reading"];
// console.log(person);
/*
    Hobies: Array(3)
                0 : "Playing"
                1 : "Movie"
                2 : "Reading"
            length: 3
 
        age      : 50
        eyeColor : "blue"
        firstName: "John"
        lastName : "Doe"
*/





//  // =>                           Deleting Properties

delete person["firstName"];
console.log(person);
/*
    age      : 50
    eyeColor : "blue"
    lastName : "Doe"
*/