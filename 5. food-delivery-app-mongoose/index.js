const express = require("express");
const router = require("./src/routes/restaurant");
const mongooseConfig = require("./config/mongodb");

const server = express();
mongooseConfig.mongooseConnect();

server.listen(4500);

server.use("/api/restaurant", router);

server.get("/", (req, res)=>{
    res.send("You are connected");
});