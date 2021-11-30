/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. */
//The output should be two capital letters with a dot separating them.

function abbrevName(name) {
    console.log(arguments)
    const splitedStringArray = name.split(' ');   console.log('splitted array',splitedStringArray)
    const[firstname, lastname] = splitedStringArray;
     
    
    const initials = `${firstname[0].toUpperCase()}.${lastname[0].toUpperCase()}`;
    
    return initials;
    
    
    }
    
    console.log(abbrevName('patrick feeney')) // should return S.H
    // Sam Harris should return S.H 