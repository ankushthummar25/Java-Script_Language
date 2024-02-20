let n=5 , num , temp=1 ,i=1 , t="";
	
	do
	{
		num =i*temp;
		t = t + num + "\t";
		temp*=2;
		i++;
	}while(i<=n);

    console.log(t);

/*

    1	4	12	32	80	

*/