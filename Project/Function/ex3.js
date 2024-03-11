/*

    3. Write a JS function that accepts a string as 
       a parameter and converts the first letter of 
       each word of the string in upper case. 

       Example string : 'the quick brown fox'
       Expected Output : 'The Quick Brown Fox'

*/


const data = function add (a)
{
    let str = a.split(" ");
    for(let i=0 ; i<str.length; i++)
    {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}

console.log(data('the quick brown fox'));               // => The Quick Brown Fox



