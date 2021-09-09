const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const onlyReduce = numbers.reduce((result, element) => element % 2 === 0 ? result + element : result);
console.log(onlyReduce);

const reducePlusFilter = numbers.filter((element) => element % 2 === 0).reduce((result, element) => result + element);
console.log(reducePlusFilter)