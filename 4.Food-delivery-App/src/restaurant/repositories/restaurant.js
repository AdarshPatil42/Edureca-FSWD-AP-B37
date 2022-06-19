const mongodbConfig = require("../../../config/mongodb");
const ObjectId = require("mongodb").ObjectId;

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

exports.update = async (restaurant)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        // object id  convert string to objectId
        const filter = {_id:ObjectId(restaurant._id)};
        // set operator tell mongodb to these data items
        const update = {$set: {name: restaurant.name, location: restaurant.location, contact: restaurant.contact}};
        await collection.findOneAndUpdate(filter, update);
    }catch(err){
        console.log(err);
        return false;
    }
    return true;
}

exports.delete = async (id)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const filter = {_id:ObjectId(id)};
        collection.findOneAndDelete(filter);
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

exports.filter = async (name, location)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    const results = await collection.find({
        $and: [
            {name: {$regex: name}},
            {location: location}
        ]
    }).toArray();
    return results;
}