// SCR 1

let list = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
}

const solution1 = (D, S) => {
    return D * list[S];
}

// console.log(solution1(2, 'four')) // 8

// SCR 2

const solution2 = (N) => {
    
    const sumOfDigits = (N) => {
        let sumOfDigits = 0;
        while (N) {
            sumOfDigits += N % 10;
            N = Math.floor(N / 10);
        }
        return sumOfDigits;
    }
    
    let target = sumOfDigits(N);
    let result = ++N;

    while (sumOfDigits(result) !== target) {
        result++
    }

    return result;

}

// console.log(solution2(28))   // 37
// console.log(solution2(734))  // 743
// console.log(solution2(1990)) // 2089
// console.log(solution2(1000)) // 10000

// MaxSum

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


