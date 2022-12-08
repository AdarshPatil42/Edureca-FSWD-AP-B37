const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database('./projectdb.db', sqlite.OPEN_READWRITE,(err)=>{
    if(err){
        return console.error(err);
    }
});

let sql = `CREATE TABLE projectdb(id INTEGER PRIMARY KEY, length, width, height, weight)`;
db.run(sql);