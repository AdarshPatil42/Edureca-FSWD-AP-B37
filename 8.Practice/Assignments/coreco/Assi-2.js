// Convenient store

const myMoney = [10, 50, 100, 200];
const itemPrice = 100;
// const itemPrice = 500;

function check(arr, price){
    let totalMoney = 0;
    for(let i =0; i<arr.length; i++){
        totalMoney += arr[i];
    }

    if(price < totalMoney){
        console.log("I can purchase");
    }else{
        console.log("I need more money")
    }
}
check(myMoney,itemPrice);
