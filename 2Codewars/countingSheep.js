/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).*/

function countSheep(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === true) {
        count = count + 1;
        }
      }
      return count;
    }  
 
 
 let result = countSheep([true,  true,  true,  false,
   true,  true,  true,  true ,
   true,  false, true,  false,
   true,  false, false, true ,
   true,  true,  true,  true ,
   false, false, true,  true]);
 
   console.log(result)