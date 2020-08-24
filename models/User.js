const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', UserSchema);