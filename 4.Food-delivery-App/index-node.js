// Responsible for creating server
// Responsible for handle request, send response

// step 1: Import http package/ library.

const http = require("http");

// step 2: Create server using http
http.createServer((req, res)=>{
    res.end("Hello world from NOdeJS");
}).listen(4400);

console.log("Server is listening on 4400");
