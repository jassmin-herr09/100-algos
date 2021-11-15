/* Given two strings, write a function to determine if the second string is an anagram of the first
an anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, from 
iceman*/

/* Problem solving Checklist 
=================================================================================
1. Can I restate the problem in my own words? scrambled letters/words/phrases, same letters.. checking, frequency pattern, 
2. What are the inputs that go into the problem? 2 string, letters, also empty string. 
3. What are the outputs that should come from the solution to the problem?  boolean, so TRUE or FALSE. 
4. Can the outputs be determined from the inputs? Do I have enought info to solve the problem?  yes 
5. How should I label the important pieces of data that are a part of the problem?  string1, string2; a function. 
   Example. What are things that matter, whats the terminology, example arguments. 
6. If solution, Look back and refactor! 
=================================================================================
*/




function validAnagram(string1st, string2nd) {

    // they have to be the same length.. if not return false... 
    if(string1st.length !== string2nd.length){
      return false; 
    }
    
    const lookupObject = {};
  
    for(let i = 0; i< string1st.length; i++) {
      // check if the ltter exists, incrment, else set to 1
      let letter = string1st[i];
      lookupObject[letter] ? lookupObject[letter] += 1: lookupObject[letter] = 1;
  
  
  
    }
   for(let i =0; i < string2nd.length; i++){
     let letter = string2nd[i];
     //cant find letter or leter is zero, then its not an anagram 
     if(!lookupObject[letter]){
       return false;
     }else{
       lookupObject[letter] -= 1;
     }
   } 
  
  return true;
  }
  
  console.log(validAnagram('ana','naa'));
  