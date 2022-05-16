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
        console.log(results);
        return results;
    }catch(err){
        console.log(err);
        return -1;
    }
}


exports.getByLocation = async (_location)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const filterExpression ={location:_location};
        const results = await collection.find(filterExpression).toArray();
        console.log(results);
        return results;
    }catch(err){
        console.log(err);
        return -1;
    }
}