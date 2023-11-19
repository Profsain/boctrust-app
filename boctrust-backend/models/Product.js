// create post model
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        required: true,
    },
    benefits: {
        type: String,
        trim: true,
        required: true,
    },
    features: {
        type: String,
        trim: true,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    interestRate: {
        type: Number,
        required: true,
    },
    interestType: {
        type: String,
        required: true,
    },
    maxTerm: {
        type: Number,
        required: true,
    },
    termPeriod: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product; // export product model
