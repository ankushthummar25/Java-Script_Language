//  // =>                            Apply Method

let person = {
    print : function(city){
        return this.name + " " + this.surname + " is Visit in " + city; 
    }
};

let viru = {
    name : "Virat",
    surname : "Kohali"
}

console.log(person.print.apply(viru,['Surat']));


//  //  =>  Virat Kohali is Visit in Surat