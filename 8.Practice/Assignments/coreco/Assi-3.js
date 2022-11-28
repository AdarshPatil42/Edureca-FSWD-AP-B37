// Highest in Array using Recursion


const data = [-1, 3, 5, 6, 99, 12, 2];
// const data = [6,7,8];
let bigNum = 0;
function find(arr,i){
    if(i<arr.length){
        if(arr[i] > bigNum){
            bigNum = arr[i];
        }
        find(arr,i+1);
    }
    return bigNum;
}
const result = find(data,0);
console.log(result);