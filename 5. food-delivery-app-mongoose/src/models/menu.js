// mongoose

const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: String,
    price: String,
    type: String,
    restaurantID: {type: mongoose.Types.ObjectId, ref: 'Restaurant'}
});

const menu = mongoose.model("Menu", menuSchema);
module.exports = menu;