// function writeFile(cb,cb2,cb3) {
//     setTimeout(()=>{
//         console.log(" Here Data is writting");
//         cb();
//         cb2();
//         cb3();
//     },2000);
// }

// function readFile(){
//     setTimeout(()=>{
//     console.log("Reading given data");
//     printing();
// },2000);
// }
// function printing(){
//     console.log("Givin data is printing")
// }

// function ack(){
//     console.log("Data is Written....");
// }


// writeFile(ack, readFile, printing);

function deductAmount(cb){
    console.log("Amount is deducted in your account");
    cb();
}
function getCredit(){
    console.log("The Amount is credited in you ac");
    fail();
}
function fail(){
    setTimeout(()=>{
    console.log("sorry...transaction fail");
},2000);
}
deductAmount(getCredit, fail);
