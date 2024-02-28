/*

    4. Write a JavaScript function that accepts a 
       string as a parameter and finds the longest 
       word within the string.

       Example string : 'Web Development Tutorial'
       Expected Output : 'Development'

*/

function Longest_Word(str) 
{
    var word = str.split(' ');
    
    
    for (var i = 0; i < word.length; i++) 
    {
        word[i] = word[i].Math.max.apply(null,i);
    }
    return word[i].join("");
}
  console.log(Longest_Word('Web Development Tutorial'));
  