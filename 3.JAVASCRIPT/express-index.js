const express = require("express");

// step 2: create server and listen
const server = express();
server.listen(4400);

// step 3: create default response.
server.get("/", (req, res)=>{
    res.end("Hello world, it is from Express");
});
console.log("server is listening on 4400");