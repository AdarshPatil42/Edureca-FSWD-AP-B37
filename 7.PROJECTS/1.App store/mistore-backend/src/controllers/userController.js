

const user = require("../models/userModel");
const repo = require("../repositories/userRepositeries");
const jwt = require("jsonwebtoken");


// signup user
module.exports.signup = async (req, res)=>{
    const User = new user(req.body.name, req.body.email, req.body.password);
    const result = await repo.add(User);
    if(result){
        return res.json({status: 'ok'});
    }else{
        return res.json({status: 'error', error});
    }
}

// sign in user
module.exports.signin = async (req, res)=>{
    // 1. checking users email & password.
    const email = req.body.email;
    const user = await repo.getByEmail(email);
    if(!user || (user.password!= req.body.password)){
        return res.json({status: 'Failled to login', user:false});
    }else{
    // 2. create jwt token.
        const token = jwt.sign(
            {name:user.name, email: user.email},
            "SAMPLEPRIVATEKEY",
            {
                expiresIn: "4h"
            }
        );
    // 3. send jwt token inresponse.
        // return res.status(200).send(token);
        return res.json({status: 'ok', user:token});
    }
    
}

// contactus 
module.exports.contactus = async (req, res)=>{
    const User = new user(req.body.name, req.body.email, req.body.password, req.body.message);
    const result = await repo.add(User);
    if(result){
        return res.json({status: 'ok'});
    }else{
        return res.json({status: 'error', error});
    }
}