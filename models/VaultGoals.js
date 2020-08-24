const mongoose = require("mongoose");

const VaultGoalsSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    vaultId: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    format: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Goals", VaultGoalsSchema);