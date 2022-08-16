const express = require("express");
const userRouter = require("./src/routes/userRoutes");
const mongodb = require("./config/mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

// create server
const server = express();
server.listen(4000);
server.use(cors());
server.use(express.json());

// connect to database
mongodb.localconnect();

// configur routes
server.use(bodyParser.json());
server.use("/api/user", userRouter);

// creaye default response
server.get("/", (req, res)=>{
    res.end("Hello world");
});

console.log("server is listening on 4000");