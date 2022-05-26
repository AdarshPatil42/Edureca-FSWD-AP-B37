
const Restaurant = require("../models/restaurant");
const repo = require("../repositories/restaurant");

exports.add = async (req, res)=>{
    const newRestaurant = new Restaurant(req.body);
    const result = await repo.add(newRestaurant);
    if(result){
        res.status(200).send("Data Added");
    }else{
        res.status(503).send("Data Not Added");
    }
}

exports.get = async (req, res)=>{
    const page = req.params.page;
    const result = await repo.get(page);
    if(result){
        res.status(200).send(result);
    }else{
        res.status(503).send("Data can't be pulled");
    }
}