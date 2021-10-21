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
