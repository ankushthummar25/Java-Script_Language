let n=6 , num , nu1 , temp=1 , i , t="";
	
	for(i=1;i<=n;i++)
	{
		num =i*temp;
		t = t + num + "\t";
		temp*=2;
	}

    console.log(t);

/*

    1	4	12	32	80	192	

*/