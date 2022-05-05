const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
    postOf: {
        type: mongoose.Types.ObjectId
        //ref: User or Page
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "post"
    }
}, { timestamps: true })

module.exports = mongoose.model("share", shareSchema)