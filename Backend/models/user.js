const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    hash: {
        type: String,
        unique: true,
        require: true
    },
    salt: {
        type: String,
        unique: true,
        require: true
    }
});

const User = mongoose.model("users", userSchema);

module.exports = User;