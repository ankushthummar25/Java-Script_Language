/*

    4. Write a JavaScript function that accepts a 
       string as a parameter and finds the longest 
       word within the string.

       Example string : 'Web Development Tutorial'
       Expected Output : 'Development'

*/

function Longest_Word(str) 
{
    var words = str.split(' ');
    var maxLength = 0;
    var longestWord = '';
      
    for (var i = 0; i < words.length; i++) 
    {
      if(words[i].length > maxLength) 
      {
            maxLength = words[i].length;
            longestWord = words[i];
      }
    }
      
       return longestWord;
}
      
    console.log(Longest_Word("Web Development Tutorial"));                         // Development
    



  
  