function descendingOrder(n){
   
    let result = n.toString().split('').sort((a, b) => b - a).join('')
      // .toString convert numbers to string
      //.split('') // split each string char in to an array of chars
      //.sort((a, b) => b - a) // sort that array descending
      //.join('') // regroup all items in that array into 1 string
  
    return parseInt(result) // turn the group of strings into an array
  
   
  }
  
  console.log(descendingOrder(42145)) 