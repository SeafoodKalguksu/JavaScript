let numbers = [1, 90, 78, 3, 22, 187, 21];
let students = [{ name: 'Albert' }, { name: 'Bob' }, { name: 'Claudia' }];
let mix = [5, 'David', { name: 'Ella' }, 23, 'Frank'];

// Array.prototype.forEach()
// The forEach() executes a provided function once for each array element.
// forEach((element, index, array) => { ... })
// Return value: undefined
const logElements = (array) => array.forEach((element) => console.log(element));

// Array.prototype.map()
// The map() creates a new array populated with the results of calling
// a provided function on every element in the calling array.
// map((element, index, array) => { ... })
// Return value: A new array with each element being the result of the callback function.
const increaseForEachElementOfNumbers = (inc = 0) =>
    numbers.map((element) => element + inc);
const studentsNames = students.map((element) => element.name);
logElements(increaseForEachElementOfNumbers(1));
logElements(studentsNames);

// Array.prototype.filter()
// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.
// filter((element, index, array) => { ... } )
// Return value: A new array with the elements that pass the test.
// If no elements pass the test, an empty array will be returned.
const numbersGreaterThanNumber = (number = 0) =>
    numbers.filter((element) => element > number);
logElements(numbersGreaterThanNumber(21));

const studentsNameLengthGreaterThanNumber = (number = 0) =>
    students.filter((element) => element.name.length > number);
logElements(studentsNameLengthGreaterThanNumber(5));

const stringElementsFromMix = mix.filter(
    (element) => typeof element === 'string'
);
logElements(stringElementsFromMix);

// Array.prototype.reduce()
// The reduce() executes a user-supplied “reducer” callback function
// on each element of the array passing in the return value from the calculation
// on the preceding element.
// The final result of running the reducer across all elements of the array is
// a single value.
// reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
// reduce(callbackFn, initialValue)
// const reducer = (acc, curValue) => { ... };
// Return value: The value that results from running the “reducer”
// callback function to completion over the entire array.

let sumOfAllNumbers = (initialValue = 0) =>
    numbers.reduce((acc, curValue) => acc + curValue, initialValue);
console.log(sumOfAllNumbers());
console.log(sumOfAllNumbers(1)); // 1 + sumOfAllNumbers

// Array.prototype.find()
// The find() returns the value of the first element in the provided array
// that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
// find((element, index, array) => { ... } )
// Return value: The value of the first element in the array
// that satisfies the provided testing function. Otherwise, undefined is returned.
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
];

// Using arrow function and destructuring
const result = inventory.find(({ name }) => name === 'cherries');
console.log(result); // { name: 'cherries', quantity: 5 }

function isPrime(element, index, array) {
    let start = 2;

    while (start <= Math.sqrt(element)) {
        if (element % start++ === 0) {
            return false;
        }
    }

    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime));
console.log([4, 5, 8, 12].find(isPrime));
