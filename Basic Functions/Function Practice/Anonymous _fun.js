// Anonymous Function

let rev = function(n){
    let a = 0;
    while(n != 0){
        a = a * 10 + n % 10;
        n = parseInt(n/10);
    }
    return a;
}
console.log(rev(456789)); 

/*

987654

*/