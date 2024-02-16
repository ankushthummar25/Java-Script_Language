let perfect = (a) =>{
    let n = 0;
for(let i = 1; i < a; i++)
{
    if(a % i == 0)
    {
        n = n + i;
        console.log(i);
    }
}

console.log(n);
if(a == n)
{
     console.log("Number is Perfact " + n);
}else
    {
        console.log("Number is Not Perfact " + n);
    }
}

console.log(perfect(496));
console.log(perfect(222));

/*

1
2
4
8
16 
31
62
124
248
496

Number is Perfact 496

============================

1
2
3
6
37
74
111
234

Number is Not Perfact 234


*/