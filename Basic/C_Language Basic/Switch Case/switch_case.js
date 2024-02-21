let a=200 , b=50 , at=4;

    console.log("1. Add \n");
    console.log("2. Substract \n");
    console.log("3. Multiply \n"); 
    console.log("4. Division \n");
    console.log("Enter The Choice :",at);

    switch(at)
    {
        case 1:
            console.log("Addition is :",a+b);
            break;
        
        case 2:
            console.log("Substract is :",a-b);
            break;
        
        case 3:
            console.log("Multiply is :",a*b);
            break;
        
        case 4:
            console.log("Division is :",a/b);
            break;
        
        default:
            console.log("Wrong Choice");
            break;
        
    }


/* 

1. Add
2. Substract
3. Multiply
4. Division

Enter The Choice : 1
Addition is: 250

============================

Enter The Choice : 2
Substract is: 150

============================

Enter The Choice : 3
Multiply is: 10000

============================

Enter The Choice : 4
Division is : 4

============================

Enter The Choice : 5
Wrong Choice


*/

