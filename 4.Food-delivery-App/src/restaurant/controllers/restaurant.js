const Restaurant = require("../models/restaurant")
const repo = require("../repositories/restaurant");

exports.add = async (req, res)=>{
    const restaurant = new Restaurant(req.body.name, req.body.location, req.body.contact);
    const result = await repo.add(restaurant);
    if(result){
        return res.end("Restaurant is added");
    }else{
        return res.end("Failed to add restaurant");
    }
}