/*

    4. Write a JavaScript function that accepts a 
       string as a parameter and finds the longest 
       word within the string.

       Example string : 'Web Development Tutorial'
       Expected Output : 'Development'

*/

function Longest_Word(str) 
{
    let word = str.split(' ');
    
    
    for (let i = 0 ; i < word.length ; i++) 
    {
        word[i] = Math.max.apply(word);
    }
    return word[i];
   
}
  console.log(Longest_Word('Web Development Tutorial'));




  
  