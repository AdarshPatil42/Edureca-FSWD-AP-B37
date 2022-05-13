// Notes
// Array => Collection of multiple values.
// Array stores data based on indexes.
// Indexes starts at 0

// 1. Creating the array 0  1   2   3   4   5   6   7....
const arrayOfNumbers = [91,81,71,61,51,41];

// 2. How to access one value from array
console.log(arrayOfNumbers[2]+arrayOfNumbers[4]);

// 3. How to add a value to array
arrayOfNumbers.push(30);
console.log(arrayOfNumbers);
arrayOfNumbers.push(1234);
console.log(arrayOfNumbers);

// 4. How to remove a value from array.
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

arrayOfNumbers.pop("1");
console.log(arrayOfNumbers);

// 5. How to insert an element anywhere using index.
//  [ 91,81,71,61,51,41];
arrayOfNumbers.splice(2,0, 76);
arrayOfNumbers.splice(3,0, 58);
arrayOfNumbers.splice(0,5, 32);
arrayOfNumbers.splice(2,4, 15);

console.log(arrayOfNumbers);

// 6. How to delete an element usign index.
// 91,81,71,61,51,41
arrayOfNumbers.splice(2, 3);

console.log(arrayOfNumbers);

arrayOfNumbers.splice(5, 2);

console.log(arrayOfNumbers);

// 7. How to get size of array.
console.log(arrayOfNumbers.length);

// 8. How to get part of an array.

// const subArray = arrayOfNumbers.slice(1, 4);
// console.log(subArray);

// 9. How to find an element in array based on condition.
// [91,81,71,61,51,41]
const result = arrayOfNumbers.findIndex(e=> e==61);
console.log(result);

// 10. How to find multiple elements in array based on a condition
// [10, 20, 43, 21, 98, 54]
// 43, 98, 54
const numbersGreaterThan60 = arrayOfNumbers.filter(e=> e>30);
console.log(numbersGreaterThan60);