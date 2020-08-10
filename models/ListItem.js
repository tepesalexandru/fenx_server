const mongoose = require('mongoose');

const ListItemSchema = mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.Schema('ListItems', ListItemSchema);