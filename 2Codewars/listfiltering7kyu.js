/*  create a function that takes a list of non-negative integers and strings 
and returns a new list with the strings filtered out */

function filter_list(l) {
    // Return a new array with the strings filtered out
    
    //filter to return only nums
    //method
    
    return l.filter((element) => {
      return typeof element !== 'string'
    })
    
  }