const mongoose = require("mongoose");

const VaultGoalsSchema = mongoose.Schema({
    vaultId: {
        type: String,
        required: true
    },
    hasGoal: {
        type: Boolean,
        required: true,
        default: false
    },
    deadline: {
        type: Date,
        required: false
    },
    format: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Goals", VaultGoalsSchema);