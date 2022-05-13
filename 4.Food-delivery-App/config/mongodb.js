// connect to mongodb to database

const mongodb = require("mongodb");

const mongoDbClient = mongodb.MongoClient;

const url = "mongodb+srv://AdarshPatil042:Apwd5342@cluster0.zk9iz.mongodb.net/FooddeliveryApp?retryWrites=true&w=majority";


var client;

exports.connect = async ()=>{
    try{
        client = await mongoDbClient.connect(url);
        console.log("Db is connected");
    }catch(err){
        console.log(err);
    }
}

exports.getCollection = (collectionName)=>{
    return client.db('FooddeliveryApp').collection(collectionName);
}