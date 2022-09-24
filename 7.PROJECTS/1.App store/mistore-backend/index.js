const express = require("express");
const userRouter = require("./src/routes/userRoutes");
const mongodb = require("./config/mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

// create server
const server = express();
const PORT = process.env.PORT || 4000;
server.listen(PORT);
server.use(cors());
server.use(express.json());

// connect to database
mongodb.localconnect();

// configur routes
server.use(bodyParser.json());
server.use("/api/user", userRouter);



// step for heroku deployment
if(process.env.NODE_ENV = "production"){
    server.use(express.static("mistore-frontend/build"));
}

// create default response
server.get("/", (req, res)=>{
    res.end("Hello world");
});
console.log("server is listening on 4000");