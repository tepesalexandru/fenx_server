const mongoose = require('mongoose');

const VaultSchema = mongoose.Schema({
    userId: {
        type: String,
        rquired: true
    },
    array: {
        type: []
    }
})

module.exports = mongoose.model('Vaults', VaultSchema);