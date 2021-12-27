/* Problem solving Checklist 
=================================================================================
1. Can I restate the problem in my own words? create a function that removes
1st and last character of string. 
                          
2. What are the inputs that go into the problem? In Clint's words, what data are we working with? a string of characters. dont worry about less than 2 characters
3. What are the outputs that should come from the solution to the problem? In Clint's words, what is our data supposed to look like?  A string
4. Can the outputs be determined from the inputs? Do I have enought info to solve the problem? yes. 
5. How should I label the important pieces of data that are a part of the problem? Example. What are things that matter, whats the terminology ? string
6. If I havea a solution, Look back and refactor!   im not here yet. */

/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str){
    //You got this!
   
    let splittedArray = str.split("").slice(1,-1)
   
    return splittedArray.join("");
   
   };
   
   console.log(removeChar('hailey')) // return aile