// testDeclaration is a name of function
function testDeclaration() {
    
    if(true){
        var x=120;
        let y=150;
        console.log("Inside If block")
        console.log(x)
        console.log(y)
    }

    console.log("outside If block")
    console.log(x)
    console.log(y)

}

// Execute a function = name of fucn ();
testDeclaration();