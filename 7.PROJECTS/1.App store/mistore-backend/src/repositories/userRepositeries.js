// call database and get collection

const mongodbConfig = require("../../config/mongodb");

module.exports.add = async (user)=>{
    const collection = mongodbConfig.getCollection("user");
    try{
        await collection.insertOne({name:user.name, email:user.email, password:user.password, message:user.message});
    }catch(err){
        console.log(err);
        return false;
    }
    return true;
}

exports.getByEmail = async (email)=>{
    const collection = mongodbConfig.getCollection("user");
    try{
        const user = await collection.findOne({email});
        return user;
    }catch(err){
        console.log(err);
        return null;
    }
}