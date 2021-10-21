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