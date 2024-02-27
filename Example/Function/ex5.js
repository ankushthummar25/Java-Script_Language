/*

    5. Write a JavaScript function that 
       checks whether a number is perfect.

*/


function check (num){
    let sum = 0;

    for(let i=1; i<= num/2 ; i++)
    {
        if(num%i == 0)
        {
            sum = sum + i;
        }
    }

    if(num == sum){
        console.log("It is a Perfect Number");
    }else{
        console.log("It is Not Perfect Number");
    }
}

console.log(check(8));                             // => It is Not Perfect Number
console.log(check(6));                             // => It is a Perfect Number
