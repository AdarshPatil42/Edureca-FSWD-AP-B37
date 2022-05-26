

const Menu = require("../models/menu");
const repo = require("../repositories/menu");

exports.add = async (req, res)=>{
    const newMenu = new Menu(req.body);
    const result = await repo.add(newMenu);
    if(result){
        res.status(200).send("Data Added");
    }else{
        res.status(503).send("Data Not Added");
    }
}


