const User = require("../models/user");
const repo = require("../repositories/userRepo");
// const jwt = require("jsonwebtoken");

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
module.exports.login = async (req, res)=>{
    // 1.Check if email and passwaord is correct
    const email = req.body.email;
    const user = await repo.getByEmail(email);
    if(!user || (user.password!= req.body.password)){
        return res.status(400).send("Invalid credentials");
    }else{
         // 2.Create a jwt(json web token) token.
        const token = jwt.sign(
            {userid:user._id},
            "THISISMYKEY",
            {
                expiresIn: "2h"
            }
        );
            // 3.Send jwt token inresponse.
            return res.status(200).send(token);
    }
}