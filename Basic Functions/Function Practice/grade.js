let a;

function add(a)
{
    if(a>75)
    {
        console.log("Grade A ...")
    }else if (a>60)
    {
        console.log("Grade B ...")
    }else if(a>45)
    {
        console.log("Grade C ...")
    }else if(a>35)
    {
        console.log("Grade D ...")
    }else{
        console.log("A is Fail ...")
    }
}

console.log(add(69));

/*

    Grade B ...

*/