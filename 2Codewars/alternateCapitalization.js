/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good */



function capitalize(s){
    let array = Array.from(s);
    console.log(array)
    let even = [];
    let odd = [];
    
    for(let i = 0; i < array.length; i++){
      if(i % 2 == 0 ||i == 0){
        even.push(array[i].toUpperCase());
      }
      else{
        even.push(array[i])
      }
    }
    
    for(let i = 0; i < array.length; i++){
      if(i == 1 || i % 2 == 1){
        odd.push(array[i].toUpperCase())
      }
      else{
        odd.push(array[i])
      }
    }
    
    
    return [even.join(""),odd.join("")]
    };
    

