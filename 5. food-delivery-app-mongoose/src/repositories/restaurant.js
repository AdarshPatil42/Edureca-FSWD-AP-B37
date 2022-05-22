const Restaurant = require("../models/restaurant");

exports.add = async (restaurant)=>{
    try{
        const result = await Restaurant.create(restaurant);
        return result;
    }catch(err){
        console.log(err);
    }
    return null;
}

exports.get = async ()=>{
    try{
    const result = await Restaurant.find();
    return result;
    }catch(err){
        console.log(err);
        return null;
    }
}