const express = require("express");
const router = require("./src/routes/restaurant");
const mongooseConfig = require("./config/mongodb");
const bodyParser = require("body-parser");


const server = express();
mongooseConfig.mongooseConnect();

server.listen(4500);

server.use(bodyParser.json());
server.use("/api/restaurant", router);

server.get("/", (req, res)=>{
    res.send("You are connected");
});