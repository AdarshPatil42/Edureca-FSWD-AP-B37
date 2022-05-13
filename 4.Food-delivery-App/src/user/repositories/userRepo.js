
const mongodbConfig = require("../../../config/mongodb");

module.exports.add = async (user)=>{
    const collection = mongodbConfig.getCollection("User");
    try{
        await collection.insertOne({name:user.name, email: user.email, password: user.password});
    }catch(err){
        console.log(err);
        return false;
    }
    return true;
}