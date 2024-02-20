let a ,n=6 , b=0 , t="";

	for(a=1;a<=n;a++)
	{
	   if(a%2==0)
	    {
	      t = t + a*a + "\t";
		}else
			{
			t = t + a + "\t";
			}
	}

    console.log(t);

/*

    1	4	3	16	5	36	

*/