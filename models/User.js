const mongoose = require('mongoose');
const Vault = require("./Vault");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    vaults: [],
    dashboard: {
        income: {
            type: Number,
            required: true
        },
        expenses: {
            type: Number,
            required: true
        },
        assets: {
            type: [],
            required: false
        },
        liabilities: {
            type: [],
            required: false
        }
    }
})

module.exports = mongoose.model('Users', UserSchema);