let fact = (n) =>
{
    if(n == 1)
    {
        return 1;
    }
    else
    return n * fact(n-1);
}
let x = fact(5);
console.log("factorial is : " + x);


/*

factorial is : 120

*/