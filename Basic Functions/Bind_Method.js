// // =>                       Bind Metod

let person = {
    name : "Rohit",
    surname : "Sharma",
    print : function(){
        return this.name + " " + this.surname;
     }
};

let viru = {
    name : "Virat",
    surname : "Kohli"
}

console.log(person.print());                // Rohit Sharma


console.log(person.print.bind(viru)());     // Virat Kohli
