const mongoose = require('mongoose');

const VaultSchema = mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    currentAmount: {
        type: Number,
        required: false
    },
    favorite: {
        type: Boolean,
        default: false
    },
    imageURL: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Vaults', VaultSchema);