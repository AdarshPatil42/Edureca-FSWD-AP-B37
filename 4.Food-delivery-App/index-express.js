// step 1: Import express
const express = require("express");
const userRoutes = require("./src/user/routes/user");
const mongodb = require("./config/mongodb");
const bodyParser= require("body-parser");

// step 2: Create server and listen
const server = express();
server.listen(4400);

// connect to database
mongodb.connect();

// configure routes
server.use(bodyParser.json());
server.use("/api/user",userRoutes);

// step 3: create default response
server.get("/", (req, res)=>{
    res.end("Hello worlw from express...!");
});

console.log("Server is listening on 4400");