const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Transaction", TransactionSchema);