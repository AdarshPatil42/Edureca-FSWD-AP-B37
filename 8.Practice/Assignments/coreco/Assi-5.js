// Teamwork tile

function possibleBonus(a, b){
    for(let i = 1; i<6; i++){
        a += 1;
        if(a === b){
            return true;
        }
    }
    return false;
}
const result = possibleBonus(3,5);
// const result = possibleBonus(1, 9);
// const result = possibleBonus(5, 3);
console.log(result);