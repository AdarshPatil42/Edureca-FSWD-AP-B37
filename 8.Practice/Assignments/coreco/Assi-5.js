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
console.log(result);