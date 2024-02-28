/*

    4. Write a JavaScript function that accepts a 
       string as a parameter and finds the longest 
       word within the string.

       Example string : 'Web Development Tutorial'
       Expected Output : 'Development'

*/

function Longest_Word(str) 
{
    // var word = str.split(' ');
    
    
    for (var i = 0; i < str.length; i++) 
    {
        str[i].split("").Math.max.apply(null,str);
    }
    return str[i].join("");
   
}
  console.log(Longest_Word('Web Development Tutorial'));
  