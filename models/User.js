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
    vaults: []
})

module.exports = mongoose.model('Users', UserSchema);