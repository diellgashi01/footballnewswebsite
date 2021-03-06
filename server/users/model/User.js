const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating the User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    date:{
        type:Date,
        default: Date.now
    }

});

module.exports = User = mongoose.model('users', UserSchema);