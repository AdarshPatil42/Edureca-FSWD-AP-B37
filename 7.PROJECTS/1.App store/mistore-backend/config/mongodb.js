
// connect mongodb to database
const mongodb = require("mongodb");

const mongodbClint = mongodb.MongoClient;


const url ="mongodb+srv://AdarshPatil042:Apwd5342@cluster0.zk9iz.mongodb.net/mistoredb?retryWrites=true&w=majority";


var client;

exports.localconnect = async()=>{
    try{
        client = await mongodbClint.connect(url);
        console.log("DB is connected");
    }catch(err){
        console.log(err);
    }
}

exports.getCollection = (collectionName)=>{
    return client.db('mistoredb').collection(collectionName);
}

