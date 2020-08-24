const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
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
    }
})

module.exports = mongoose.model("Transaction", TransactionSchema);