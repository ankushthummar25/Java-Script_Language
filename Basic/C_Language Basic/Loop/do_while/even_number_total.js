let i=1 , n =10 , sum = 0 , t="";

do
	{
		if(i%2!=1)
		{
           sum+=i;
        }		   
		t = t + i + "\t";	
		i++;
	}
	while(i<=n);

    console.log(sum);

/*

    30

*/ 