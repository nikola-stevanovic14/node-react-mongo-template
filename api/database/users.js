const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        required: true,
        default: false
    },
    roles: {
        type: Array,
        required: true,
        default: []
    }
});

module.exports = mongoose.model('Users', usersSchema);