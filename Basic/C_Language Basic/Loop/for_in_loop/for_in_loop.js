//  // =>  for in loop -> array , object

/*
    for ( let key in object)
    {
        statements...
    }
*/

let arr = ['Hello' , 'World' , 'John' , 'Peter' , 'Skill' , 'code'];

for(let ele in arr)
{
    console.log(ele + " => " + arr[ele]);
}

/*
    0 => Hello
    1 => World
    2 => John
    3 => Peter
    4 => Skill
    5 => code
*/







// let person = {
//     firstname : "John",
//     lastname : "Peter",
//     email : "john20@test.in"
// }

// for(let key in person)
// {
//     console.log(key + " => " + person[key]);
// }

/*
    firstname => John
    lastname => Peter
    email => john20@test.in
*/









//  //  for of loop -> array

// let array = ['Hello' , 'World' , 'John' , 'Peter' , 'Skill' , 'code'];

// for (let key in array)
// {
//     console.log(array);
// }

/*
    (6) ['Hello', 'World', 'John', 'Peter', 'Skill', 'code']

        0: "Hello"
        1: "World"
        2: "John"
        3: "Peter"
        4: "Skill"
        5: "code"

        length: 6

        [[Prototype]]: Array(0)
*/