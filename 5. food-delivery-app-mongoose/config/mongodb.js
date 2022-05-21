
const mongoose = require("mongoose");


const url = "mongodb+srv://AdarshPatil042:Apwd5342@cluster0.zk9iz.mongodb.net/mongooseFDDB?retryWrites=true&w=majority";
exports.mongooseConnect = ()=>{
    mongoose.connect(url)
    .then(
        ()=>{
            console.log("Connected using mongoose");
        }
    ),
    err=>{console.log(err);}
}