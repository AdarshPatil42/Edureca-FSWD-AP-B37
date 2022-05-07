// step 1: Import express
const express = require("express");
const userRoutes = require("./src/user/routes/user");

// step 2: Create server and listen
const server = express();
server.listen(4400);

// configure routes
server.use("/api/user",userRoutes);
999
// step 3: create default response
server.get("/", (req, res)=>{
    res.end("Hello worlw from express...!");
});

console.log("Server is listening on 4400");