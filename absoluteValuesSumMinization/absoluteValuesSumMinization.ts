export function absoluteValuesSumMinimization(a: number[]): number {
    //get median value in a way, take left elem

    const isEven = a.length % 2 === 0; 
    return isEven ? a[a.length / 2 -1] : a[Math.floor(a.length / 2)]
    
    return 5;
}


 console.log(absoluteValuesSumMinimization([2, 4, 7]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));