// Radioactive decay - Half life


// Formula for Radioactive decay - Half life

// [1]  N = No(1/2)^n  
//Here ,   N= remaining mass/ atom , No = Initial mass/ atoms, n = number of half lives

// [2] T = (t1/2)*n
// Here, T = total time to decay,   t1/2 = half life time,  n = number of half lives



// given data
const No = 1000;
// consider t1/2 = t
const t = 5;
const n = 4;

const N = No * (Math.pow(0.5 , n));
console.log("Reamaining mass of the material is ", N , "gm");

const T = t * n ;
console.log("Time for the material to decay is", T , "Year");

