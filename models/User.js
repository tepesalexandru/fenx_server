const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    vaults: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vaults'
    }]
})

module.exports = mongoose.model('Users', UserSchema);