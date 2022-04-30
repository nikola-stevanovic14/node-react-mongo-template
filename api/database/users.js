const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const config = require("config");

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
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

usersSchema.methods.createJwtToken = () =>
    jwt.sign({email: this.email, name: this.name, enabled: this.enabled, roles: this.roles}, config.jwt.key, {});

module.exports = mongoose.model('Users', usersSchema);