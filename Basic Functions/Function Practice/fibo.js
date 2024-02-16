function fib(n) {
    if (n === 0) 
    {
        return 0;
    } else if (n === 1)
        {
            return 1;
        } else
             {
                return fib(n - 1) + fib(n - 2);
            }
}

let n = 10;

for (let i = 1; i <= n; i++)
{ 
    console.log(fib(i));
}

/*

1  2  3  5  8  13  21  34  55

*/