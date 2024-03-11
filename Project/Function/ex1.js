/*

    1. Write a JS function that reverse a number. 
       Example x = 15438;
       Expected Output : 83451

*/



//  //  =>                  Basic Function

let a = (123456)

function reverse(a){
    a = a + "";
    return Number(a.split("").reverse().join(""));
}

console.log(reverse(12345));                        // => 54321







//  //    =>                Arrow Function     

// let add = (a) => { 
//     a = a + "";
//     return a.split("").reverse().join("");
// }
// console.log(Number(add(1234567)));                    // => 7654321
