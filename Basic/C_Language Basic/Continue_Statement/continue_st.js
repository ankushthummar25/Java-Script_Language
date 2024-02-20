let i , a="";


for(i=1 ; i<=15 ; i++)
    {
        if(i==4 || i==8)
        {
            continue;
        }
       a = a + i + "\t";
    }

    console.log(a);

/*

    1	2	3	_    5	6	7	_    9	10	11	12	13	14	15	

*/