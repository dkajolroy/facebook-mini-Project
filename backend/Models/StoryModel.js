const mongoose = require("mongoose")

const storySchema = new mongoose.Schema({

    photo: {
        type: String,
        required: true
    },
    views: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }
    ],
    react: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model("story", storySchema)