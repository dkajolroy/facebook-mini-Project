const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [3, "Too sort"]
    },
    email: {
        type: String,
        required: true,
        min: [4, "Wrong email"],
        unique: true
    },
    emailVerify: {
        type: Boolean,
        default: false
    },
    phoneVerify: {
        type: Boolean,
        default: false
    },
    addressVerify: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        minlength: [4, "Too sort"],
        required: true
    },
    phone: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    terms: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: ""
    },
    address: {
        country: { type: String, enum: ['bangladesh', 'india'] },
        city: { type: String },
        zip: { type: Number },
        homeAddress: { type: String, default: "" },
    }
})

module.exports = mongoose.model("user", userSchema)