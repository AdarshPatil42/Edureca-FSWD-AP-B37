const User = require("../models/user");
const repo = require("../repositories/userRepo");

// api/user/resister
module.exports.register = async(req, res)=>{
    // read req.body
    // repositotary calls
    console.log(req.body);
    const user = new User(req.body.name, req.body.email, req.body.password);
    const result = await repo.add(user);
    if(result){
        return res.end("User is added");
    }else{
        return res.end("User failed to add");
    }
}

// api/user/login
module.exports.login = (req, res)=>{
    // read rea.body
    // db call
    res.end("This is login request");
}