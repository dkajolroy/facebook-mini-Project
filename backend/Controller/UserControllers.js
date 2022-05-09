const UserModel = require("../Models/UserModel")

exports.userProfile = async (req, res) => {

    try {
        const findUser = await UserModel.findById(req.user._id)
        if (!findUser) {
            res.status(400).send({ message: 'User not found' })
        } else {
            res.status(200).send({
                username: findUser.username,
                name: findUser.name,
                email: findUser.email,
                dateOfBirth: findUser.dateOfBirth,
                gender: findUser.gender,
                avatar: findUser.avatar,
                cover: findUser.cover,
                phone: findUser.phone,
                address: findUser.address
            })
        }
    } catch (error) {
        res.status(500).send(error.message)

    }

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
        const myFollower = await findMe.followings.filter(x => findMe.followers.includes(x))

        const findFollower = await UserModel.find({
            _id: { $in: myFollower }
        }).select('username name avatar ')
        res.send(findFollower)
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

// GET Friend Request 
exports.getFriendRequest = async (req, res) => {
    try {
        const findMe = await UserModel.findById(req.user._id)
        const followBack = await findMe.followers.filter(x => !findMe.followings.includes(x))
        const followBackUser = await UserModel.find({
            _id: { $in: [...followBack] }
        }).select('name avatar')
        res.status(200).send(followBackUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// UnFollow User
exports.unFollowUser = async (req, res) => {

    try {
        const findMe = await UserModel.findById(req.user._id)
        const findFriend = await UserModel.findById(req.params._id)
        if (!findFriend) res.status(400).send({ message: "User not found" })
        if (findMe.followings.includes(req.params._id)) {
            await findMe.updateOne({
                $pull: { followings: req.params._id }
            })
            await findFriend.updateOne({
                $pull: { followings: req.user._id }
            })
            await findMe.updateOne({
                $pull: { followers: req.params._id }
            })
            await findFriend.updateOne({
                $pull: { followers: req.user._id }
            })
            res.status(200).send({ message: "Unfriend Successfully" })
        } else {
            res.status(400).send({ message: "Not Your friend" })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}