const UserModel = require("../Models/UserModel")

exports.userProfile = async (req, res) => {
    console.log(req.user)
    const { username, name, email, avatar, cover, address, phone } = req.user
    res.status(200).send({
        username, name, email, avatar, cover, phone, address
    })
}

// Follow User
// Method Put
// Access Private
exports.followAndUnFollow = async (req, res) => {
    if (req.params._id == req.user._id) return res.status(400).send({ message: "Don't follow yourself" })
    try {
        const findMe = await UserModel.findById(req.user._id)
        const findHe = await UserModel.findById(req.params._id)
        if (!findMe.followings.includes(req.params._id)) {
            await findMe.updateOne({
                $push: { followings: req.params._id }
            })
            await findHe.updateOne({
                $push: { followers: req.user._id }
            })
        } else {
            await findMe.updateOne({
                $pull: { followings: req.params._id }
            })
            await findHe.updateOne({
                $pull: { followers: req.user._id }
            })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}