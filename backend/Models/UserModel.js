const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: { type: String, trim: true, unique: true, required: true, minlength: [4, "Too sort"] },
    name: { type: String, required: true, minlength: [3, "Too sort"] },
    email: { type: String, required: true, minlength: [4, "Invalid email address"] },
    password: { type: String, required: true, minlength: [4, "Too sort"] },
    phone: { type: String, default: '' },
    avatar: { type: String, default: 'https://yt3.ggpht.com/ytc/AKedOLQMxO5ybJytpgAsgyYDiMw2lrUpVGo1YZddOKEljQ=s900-c-k-c0x00ffffff-no-rj' },
    bio: { type: String, default: "", maxlength: [100, "Too long"] },
    cover: { type: String, default: "" },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: {
        country: { type: String, default: "" },
        district: { type: String, default: '' },
        zip: { type: Number, default: 0 },
        address: { type: String, default: '' }
    },
    social: {
        youtube: { type: String },
        twitter: { type: String },
        instagram: { type: String },
        linkedin: { type: String },
        github: { type: String }
    },
    contact: {
        email: { type: String },
        emailVerify: { type: Boolean, default: false },
        phone: { type: Number },
        phoneVerify: { type: Boolean, default: false },
        whatsapp: { type: String }
    },
    emailVerify: { type: Boolean, default: false },
    phoneVerify: { type: Boolean, default: false },
    addressVerify: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    profileLock: { type: Boolean, default: false },
    followings: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }
    ],
    followers: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }
    ]

}, { timestamps: true })

module.exports = mongoose.model("user", UserSchema)
