const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true},
    imgSmall: { type: String}
}, {timestamps: true })

module.exports = mongoose.model("Product", ProductSchema);
