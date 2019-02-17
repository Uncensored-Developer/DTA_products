const mongoose = require('mongoose'),
    mongooseApiQuery = require('mongoose-api-query'),
    createdModified = require('mongoose-createdmodified').createdModifiedPlugin


// Define schema for the Product
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
}, { minimize: false });


//Add the plugins
ProductSchema.plugin(mongooseApiQuery)
ProductSchema.plugin(createdModified, { index: true })

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
