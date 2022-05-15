const mongodbConfig = require("../../../config/mongodb");

exports.add = async (restaurant)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        await collection.insertOne({name:restaurant.name, location:restaurant.location, contact:restaurant.contact});
    }catch(err){
        console.log(err);
        return false;
    }
    return true;
}

exports.get = async ()=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const results = await collection.find().toArray();
        return results;
    }catch(err){
        console.log(err);
        return -1;
    }
}