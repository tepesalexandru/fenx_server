const mongoose = require("mongoose");

const VaultTransactionsSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    vaultId: {
        type: String,
        required: true
    },
    transactions: []
})

module.exports = mongoose.model("Transactions", VaultTransactionsSchema);