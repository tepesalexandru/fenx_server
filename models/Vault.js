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
    }
});

module.exports = mongoose.model('Vaults', VaultSchema);