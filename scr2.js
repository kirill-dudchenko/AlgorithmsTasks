// Write a function, which given an Integer N, returns the smallest integer
// that is greater than N and the sum of whose digits is equal to the sum
// of the digits of N.

// 28 => 2+8 = 10 => 10 is the target.
// 29 => 2+9 = 11
// 30 => 3+0 = 3
// ...
// 36 => 3+6 = 9
// 37 => 3+7 = 10 => sum of digits of 37 equals the target (10)
// return 37

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

console.log(solution2(28))   // 37
console.log(solution2(734))  // 743
console.log(solution2(1990)) // 2089
console.log(solution2(1000)) // 10000