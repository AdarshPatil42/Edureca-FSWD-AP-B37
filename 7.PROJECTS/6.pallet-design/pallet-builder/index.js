const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const sqlite = require("sqlite3").verbose();
let sql;
const url = require("url");
const cors = require("cors");



const db = new sqlite.Database('./projectdb.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("DB is connected .");
});


server.use(cors());
server.use(bodyParser.json());

// post request
server.post('/projectdb', (req, res) => {
    try {
        const { length, width, height, weight } = req.body;
        sql = "INSERT INTO projectdb(length, width, height, weight) VALUES(?,?,?,?)";
        db.run(sql, [length, width, height, weight], (err) => {
            if (err) return console.error(err.message);

            console.log("sucessfull input ", length, width, height, weight);
        });
        return res.json({
            status: 200,
            success: true,
        });

    } catch (err) {
        return res.json({
            status: 400,
            success: false,
        })
    }
})

// Get request
server.get("/projectdb", (req, res) => {
    sql = "SELECT * FROM projectdb";
    try {
        db.all(sql, [], (err, rows) => {
            if (err) return console.error(err.message);

            if (rows.length < 1) {
                return res.json({ status: 300, success: false, error: "No Match" })
            }

            return res.json({ status: 200, data: rows, succes: true });
        })
    } catch (err) {
        return res.json({
            status: 400,
            success: false,
        })
    }
})

server.listen(3400);
console.log("server is listening on 3400");
