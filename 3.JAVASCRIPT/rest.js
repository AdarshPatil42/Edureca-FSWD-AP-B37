// Rest and Spread Operator. (...)

function sum(...numbers){
    let result=0;
    for(let i=0; i<numbers.length; i++){
    
        result=result+numbers[i];
    }
    console.log(result);
}

sum(24, 38); //62
sum(12, 23, 84); //119 
sum(22, 32, 41, 855); //950 
sum(27, 38, 4, 59, 60); // 158