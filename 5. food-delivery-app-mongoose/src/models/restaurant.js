// mongoose

const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    contact: String,
    website: String
});

const restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = restaurant;