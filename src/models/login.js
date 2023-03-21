
const mongoose = require('mongoose')
const internal = require('stream');
const { boolean } = require('webidl-conversions');

const loginschema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Phno: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required:  true
    }
});

module.exports = mongoose.model("Login",loginschema);