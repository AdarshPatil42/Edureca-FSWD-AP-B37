// step 1: Import express
const express = require("express");
const userRoutes = require("./src/user/routes/user");
const restaurantRoutes = require("./src/restaurant/routes/restaurant");
const mongodb = require("./config/mongodb");
const bodyParser= require("body-parser");
const auth = require("./src/middlewares/auth");

// step 2: Create server and listen

const server = express();
server.listen(4400);

// connect to database
mongodb.connect();

// configure routescd
server.use(bodyParser.json());
server.use("/api/user",userRoutes);
server.use("/api/restaurant", auth, restaurantRoutes);

// step 3: create default response
server.get("/", (req, res)=>{
    res.end("Hello world from express...!");
});

console.log("Server is listening on 4400");