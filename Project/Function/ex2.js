/*

    2. Write a JS function that returns a passed 
       string with letters in alphabetical order.

       Example string : 'webmaster'
       Expected Output : 'abeemrstw'

       Assume punctuation and numbers symbols are 
       not included in the passed string.

*/



// // =>                       Basic Function

function txt(a) 
{
    return a.split("").sort().join("");
}

console.log(txt('webmstera'));                          // => abeemrstw






// // =>                       Arrow Function

let add = (a) => {
    return a.split("").sort().join("");
}
console.log(add('admission'));                          // => adiimnoss