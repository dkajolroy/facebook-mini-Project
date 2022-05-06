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
            res.status(200).send({ message: "Follow success" })
        } else {
            await findMe.updateOne({
                $pull: { followings: req.params._id }
            })
            await findHe.updateOne({
                $pull: { followers: req.user._id }
            })
            res.status(200).send({ message: "Unfollow success" })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Get All User
// Method Get
// Access Public
exports.myFriendsList = async (req, res) => {
    const myId = req.user._id
    try {
        const findMe = await UserModel.findById(myId)
        const myFollower = await UserModel.find({
            _id: [...findMe.followers]
        }).select('username name email avatar cover ')
        res.send(myFollower)
    } catch (error) {
        res.send(error.message)
    }
}

// Get All User
// Method Get
// Access Public
exports.getAllUser = async (req, res) => {
    const myId = req.user._id
    try {
        const findMe = await UserModel.findById(myId)

        const findUser = await UserModel.find({
            _id: { $nin: [...findMe.followings, findMe._id, ...findMe.followers] }
        }).select('username name email avatar cover ')

        res.status(200).send(findUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}