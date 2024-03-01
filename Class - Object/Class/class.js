//  // =>                           Class

class Person{
    constructor(name){
        this.name = name;
    }
    display = function (){
        return "Hello " + this.name;
    }
};

let obj = new Person('John');

console.log(obj);
/*
    display: ƒ ()
        name: "John"

    [[Prototype]]: Object
*/


console.log(obj.name);               // John



console.log(obj.display());          // Hello John