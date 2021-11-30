/* Problem solving Checklist 
=================================================================================
1. Can I restate the problem in my own words? I have an array of numbers, where they are
                                             integers, and i have to return the same set of numbers
                                             but its opposite, so the positive nums become negative. 
                                             and the negatives become positives. I cant 
                                             mutate the input array. 
2. What are the inputs that go into the problem? In Clint's words, what data are we working with?  an array of integers, they could be postitive or neg nums
3. What are the outputs that should come from the solution to the problem? In Clint's words, what is our data supposed to look like?  its additve inverse, so another num array.
4. Can the outputs be determined from the inputs? Do I have enought info to solve the problem? yes.
5. How should I label the important pieces of data that are a part of the problem? Example. What are things that matter, whats the terminology ?  An array of ints
6. If I havea a solution, Look back and refactor!   im not here yet. 
================================================================================= */

/* Problem:  Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
You can assume that all values are integers. Do not mutate the input array/list */

function invert(array) {

    let newArray = [];
     array.forEach(element => {
       
       console.log('here is each element', newArray.push(element * -1));
  
  
     });
  return newArray;
  }
  
  
  console.log('here is the result',invert([1,2,3,4,5])); // should return [-1,-2,-3,-4,-5]
    //invert([1,-2,3,-4,5]) should return [-1,2,-3,4,-5]
    // invert([]) should return  []
  