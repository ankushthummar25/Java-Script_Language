//  // =>                    Shallow Copy


const first_person = {
    name: "Jack",
    age: 24,
};

const second_person = first_person;
second_person.age = 25;


console.log(first_person.age);                // output: 25

console.log(second_person.age);               // output: 25




console.log(first_person);                    // {name: 'Jack', age: 25}

console.log(second_person);                    // {name: 'Jack', age: 25}