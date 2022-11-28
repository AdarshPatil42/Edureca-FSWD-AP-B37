// Basic Question Answers

// Q(1) Reverse string

const str = "Hello World";

const reverseStr = str.split("").reverse().join("");

console.log(reverseStr);

// --------------------xxxxxxxxxxxxxxxxxxxx----------------------


// Q(2) Reverse word only in string

// const str = "Hello World";
// const newStr = str.split("").reverse().join("");
// const result = newStr.split(" ").reverse();
// console.log(result);

// --------------------xxxxxxxxxxxxxxxxxxxx----------------------

// Q(3) Find missing Number from 1 to 100

// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//     24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//     48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 
//     72, 73, 74,, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 97,
//     98, 99, 100];

// function findMissingNum(arr){
//     let missingNum =[];
//     for(let i=1; i<=100; i++){
//         if(arr.indexOf(i) == -1){
//             missingNum.push(i);
//         }
//     }

//     return missingNum;
// }
// const result = findMissingNum(Numbers);
// console.log(result);

// --------------------xxxxxxxxxxxxxxxxxxxx----------------------

// Q(4) Find missing Number from 1 to 100

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//     24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//     48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//     88, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 1, 84, 85, 86, 87, 88, 89, 90,1, 91, 92, 93,
//     94, 95, 96, 97, 98, 99, 100];

// function findDuplicateNum(arr){
//     let sortArr = arr.sort((a,b)=> a-b);
//     console.log(sortArr)
//     let duplicateNum = [];
//     for(let i =0; i<sortArr.length; i++){
//         if(sortArr[i+1]==sortArr[i]){
//             duplicateNum.push(sortArr[i]);
//         }
//     }
//     console.log(duplicateNum);
// }

// findDuplicateNum(numbers);

// --------------------xxxxxxxxxxxxxxxxxxxx----------------------

// Q(5) Find common elements from two array

// const arr1= [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
//         71, 88, 72, 73, 74, 75, 76, 77, 78, 79, 80];
// const arr2= [81, 82, 83, 1, 84, 85, 86, 87, 88, 60, 89, 90,1, 91, 92, 93];

// function commonEle(arr1,arr2){
//     let commonNum = [];
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] == arr2[j]){
//                 commonNum.push(arr2[j]);
//             }
//         }
//     }
//     return commonNum;
// }

// const result = commonEle(arr1,arr2);
// console.log(result);

// --------------------xxxxxxxxxxxxxxxxxxxx----------------------
