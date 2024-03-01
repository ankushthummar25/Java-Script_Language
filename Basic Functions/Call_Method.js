//  // =>                           Call Method

let person = {
    print : function(city){
        return this.name + " " + this.surname + "\n";
    }
};

let viru = {
    name : "Virat",
    surname : "Kohli"
}

console.log(person.print.call(viru , "Surat"));
//  //    Virat Kohli
