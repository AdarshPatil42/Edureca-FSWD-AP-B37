const Restaurant = require("../models/menu");

exports.add = async (menu)=>{
    try{
        const result = await Menu.create(menu);
        return result;
    }catch(err){
        console.log(err);
    }
    return null;
}