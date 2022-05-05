const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    desc: {
        type: String,
        default: "",
        trim: true
    },
    images: [
        {
            type: String
        }
    ],
    like: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ]
}, { timestamps: true })


module.exports = mongoose.model("post", PostSchema)