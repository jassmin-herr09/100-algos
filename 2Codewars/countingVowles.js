
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {

    var vowelsCount = 0;
 
    let vowels = "aeiou"; //prints [ 'a', 'e', 'i', 'o', 'u' ]
 
     for(let i =0; i < str.length; i++){
     //console.log(str[i])
     console.log(vowels.indexOf(str[i])) // prints  -1 1 -1 -1 3 2
                                         //.         h e l  l  0 
        if(vowels.indexOf(str[i]) > -1){
          vowelsCount++;
        }
 
     }
   
 
 
   return vowelsCount;
 }
 
 console.log(getCount('hello'));
 