// TASK

// You're given string S. Deletion of the K-th letter of S costs C[K].
// After deleting a letter, the costs of deleting other letters do not change.
// For example, for S = 'ab' and C = [1, 3], after deleting 'a', deletion of 'b' will still cost 3.
// You want to delete some letters from S to obtain a string without 2 identical letters next  to each other.
// What is the minimum total cost of deletions to achieve such a string?

// SOLUTION

const solution = (string, cost) => {

    let result = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            result += cost[i]
        }
    }
    return result;
}

// TESTS

console.log(solution('abccbd', [0, 1, 2, 3, 4, 5])); // 2
console.log(solution('aabbcc', [1, 2, 1, 2, 1, 2])); // 3
console.log(solution('aaaa', [3, 4, 5, 6])); // 12
console.log(solution('ababa', [10, 5, 10, 5, 10])); // 0

