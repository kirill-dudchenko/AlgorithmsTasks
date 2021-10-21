
// 1)Исходный массив [5, 23, -110, 3, 18, 0, 14], данные в нём не менять. 
const arr = [5, 23, -110, 3, 18, 14];

// a.Вывести в консоль только нечетные числа; 
const oddNumbers = arr.filter((item) => {
    return item % 2 !== 0;
})

// b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20; 
const plusTwenty = arr.map((item) => {
    return item += 20;
})

// c.Вывести в консоль массив, состоящий только из положительных нечетных чисел; 
const oddPositiveNumbers = arr.filter((item) => {
    return item % 2 !== 0 && item > 0;
})

// d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки. 
const sum = arr.reduce((memory, item) => {
    return memory += item % 3;
}, 0)

// e.Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5.
const includesFive = arr.includes(5);

// f.Получить массив без первого элемента, вывести в консоль. 
const withoutFirst = arr.filter((item, index) => {
    if (index > 0) {
        return item;
    }
})

// g.Отсортировать массив по возрастанию, вывести в консоль. 
arr.sort((a, b) => a - b);

// h. Определить, есть ли в массиве числа, кратные 5.
const containsDivisibleByFive = arr.some((item) => {
    return item % 5 === 0;
})

console.log(oddPositiveNumbers)