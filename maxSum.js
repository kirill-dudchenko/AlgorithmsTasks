// Write a function, that given an array consisting of N integers, 
// returns the maximum sum of two numbers whose digits add up to an equal sum.
// If there are no two numbers whose digits add up to an equal sum, the 
// function should return -1;

// [51, 71, 17, 42]
// [5+1, 7+1, 1+7, 4+2]
// [6, 8, 8, 6]
// [51, 42] > [71, 17]
// 51 + 42 = 93
// return 93;

const solution3 = (arr) => {

    const sumOfDigits = (number) => { // returns sum of digits of the number (51 => 6)
        let sumOfDigits = 0;
        while (number) {
            sumOfDigits += number % 10;
            number = Math.floor(number / 10);
        }
        return sumOfDigits;
    }
    
    const myMap = new Map(); // key: sum of digits of an item; value: array with items whose digits sum is equal;

    arr.forEach((item) => {
        if (myMap.has(sumOfDigits(item))) { 
            myMap.get(sumOfDigits(item)).push(item) //6: [51, 42], 8: [71, 17]
            
        } else { 
            myMap.set(sumOfDigits(item), [item]) // 6: [51]
        }
    })
    
    if (new Set(arr.map(item => sumOfDigits(item))).size === arr.length) return -1; // check if has dublicates;
    
    let sumsArr = []; // [93, 88]

    myMap.forEach((item) => {
        item.sort((a, b) => b - a)
        sumsArr.push(item[0]+item[1]) 
    })
    
    return Math.max(...sumsArr) // 93
}

console.log(solution3([51, 71, 17, 42])) // 93
console.log(solution3([42, 33, 60])) // 102
console.log(solution3([51, 32, 43])) // -1
