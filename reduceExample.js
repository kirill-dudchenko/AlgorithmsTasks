// Given an array of integers, return an array, where the first element
// is the count of positive numbers and the second element is sum of 
// negative numbers.


// WITHOUT REDUCE

const solution1 = (arr) => {

    let counter = 0;
    let sum = 0;

    arr.forEach((arrItem, itemIndex, arrItself) => {
        if (arrItem > 0) {
            counter++;
        } else if (arrItem < 0) {
            sum += arrItem;
        }
    })

    return [ counter, sum ]
}

// WITH REDUCE

const solution2 = (arr) =>

    arr.reduce((memory, arrItem, itemIndex, arrItself) => {
        if (arrItem > 0) {
            memory[ 0 ]++;
        } else if (arrItem < 0) {
            memory[ 1 ] += arrItem;
        }
        return memory
    }, [ 0, 0 ])

console.log(solution2([0,1,2,-5,-10,7])) // [3, -15]