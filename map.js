const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Map automatically returns value
const numbersMap = numbers.map( (num) => num + 10)
console.log(numbersMap);

//  we can also apply chaining
const chain = numbers.map( (num) => num * 10).map( (num) => num + 3)
console.log(chain);

const chainFilter = numbers.map( (num) => num * 10).map( (num) => num + 3).filter( (num) => num > 60)
console.log(chainFilter);

// first calculate the the first .map value and then value will taken by second map and so on