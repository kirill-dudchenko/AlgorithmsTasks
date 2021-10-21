// Write a function that, given an Integer D (between 1 and 5)
// and a String S ('one', 'two', 'three', 'four', five), returns
// the result of multiplying D and S expressed as an integer.

// solution1(2, 'four') = 8;

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

console.log(solution1(2, 'four')) // 8
