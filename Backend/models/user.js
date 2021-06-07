const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // username is a field name in the table User(users)
    username: {
        type: String,
        trim: true,
        index: true,
        lowerCase: true
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        index: true
    },
    address: {
        type: String
    },
    about: {
        type: String,
        // default: 'You can change your information in update page of user'
    },
    profile: {
        type: String
    },
    mobile_no: {
        type: String
    },
    role: {
        type: String,
        // default: "Customer"
    },
    profilepic: {
        data: Buffer,
        contentType: String
    },
    purchaseHistory: {
        type: Array,
        default: []
    },
    password: {
        type: String
    },
    verification_code: {
        type: Number
    },
    email_verified : {
        type: Number,
        default: 0
    },
    youtube: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    },
    registered_on: {
        type: Date,
        default: Date.now()
    },
    updated_on: {
        type: Date
    },
    resetPasswordLink : {
        type: String,
        default: ''
    }
},{});

module.exports = mongoose.model('User', userSchema);