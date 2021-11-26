/* Problem solving Checklist 
=================================================================================
1. Can I restate the problem in my own words?  yes, returning one array with unique values, so no duplicates, the way they are
2. What are the inputs that go into the problem? two or more arrays, so a collection 
3. What are the outputs that should come from the solution to the problem? 1 array. 
4. Can the outputs be determined from the inputs? Do I have enought info to solve the problem? yes i do 
5. How should I label the important pieces of data that are a part of the problem? Example. What are things that matter, whats the terminology. arrays and collection. 
	6. If solution, Look back and refactor! 
=================================================================================
*/ 
/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.*/

function uniteUnique(collection) {
    let finalCollection = [];
     //console.log('our arguments', Object.values(arguments));// an array of the arrays. 
      const ourValues = Object.values(arguments);
  
     for(let i = 0; i < ourValues.length; i ++) {
       //console.log('ourValues, i =', ourValues[i]);
        for(let j = 0; j < ourValues[i].length; j ++){
            if (finalCollection.indexOf(ourValues[i][j]) === -1 ) {
              finalCollection.push(ourValues[i][j]); // prints 132521421
        }
  
       }
  
     }
    
    return finalCollection;
  
  }
  
  let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4]
  
  console.log('our results', result)