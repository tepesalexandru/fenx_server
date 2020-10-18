const mongoose = require("mongoose");

const VaultDetailsSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    vaultId: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    favorite: {
        type: Boolean,
        required: false
    },
    imageURL: {
        type: String,
        required: false
    },
    contributors: {
        type: []
    }
})

module.exports = mongoose.model("V_Details", VaultDetailsSchema);