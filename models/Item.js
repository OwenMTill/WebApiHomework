const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name:String
});

const Item = mongoose.model("Item", itemSchema, "itemdata");

module.exports = Item;