const PostModel = require("../Models/PostModel")
const UserModel = require("../Models/UserModel")


// Create Post
// Method Post
// Access Private
exports.createPost = async (req, res) => {
    const desc = req.body.desc.trim()
    const images = req.body.images
    if (!desc && !images) return res.status(400).send({ message: "Invalid post information" })
    try {
        const createPost = await PostModel.create({
            user: req.user._id,
            ...req.body
        })
        const { desc, images, ...other } = createPost._doc
        res.status(200).send({ message: "Post successfully", post: { desc, images } })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Get Only My Post by profile
// Method Get
// Access Private
exports.getMyPost = async (req, res) => {
    const myId = req.user._id
    try {
        const myPost = await PostModel.find({ user: myId }).sort({ createdAt: -1 }).populate({
            path: "user",
            select: ['name', 'avatar']
        })
        res.status(200).send(myPost)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// Like Post 
// Method Put 
// Access Private
exports.postLike = async (req, res) => {

    const post = req.params._id
    try {
        const findPost = await PostModel.findById(post)
        if (!findPost.like.includes(req.user._id)) {
            await findPost.updateOne({
                $push: { like: req.user._id }
            })
            res.status(200).send({ message: "Like Succeed" })
        } else {
            await findPost.updateOne({
                $pull: { like: req.user._id }
            })
            res.status(200).send({ message: "Unlike Succeed" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

// Delete Post 
// Method delete
// access private
exports.deletePost = async (req, res) => {

    try {
        const findPost = await PostModel.findById(req.params._id)
        if (!findPost) return res.status(400).send({ message: "Post not found" })
        if (findPost.user.toString() != req.user._id) {
            res.status(400).send({ message: "You can delete only your post" })
        } else {
            await PostModel.findByIdAndDelete(req.params._id)
            res.status(200).send({ message: "Delete success" })
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// Post Update
// Method PUT
// Access Private
exports.updatePost = async (req, res) => {
    if (req.body.user) return res.status(400).send({ message: "You can't update your ID" })
    try {
        const findPost = await PostModel.findById(req.params._id)
        if (findPost.user.toString() === req.user._id.toString()) {
            await findPost.updateOne({
                $set: req.body
            })
            res.status(200).send({ message: "Update successfully" })
        } else {
            res.status(400).send({ message: "You can update only your post" })
        }
    } catch (error) {

    }
}


// Get All Post 
exports.getFriendsMyPost = async (req, res) => {
    try {
        const findMyData = await UserModel.findById(req.user._id)
        const getAllPost = await PostModel.find({
            user: { $in: [...findMyData.followings, req.user._id] }
        }).sort({ createdAt: -1 }).populate({
            path: "user",
            select: ('avatar name')
        })
        res.status(200).send(getAllPost)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// Get All Post 
exports.getAllPost = async (req, res) => {
    try {
        const findPost = await PostModel.find().populate({
            path: "user",
            select: ("name avatar")
        })
        res.status(200).send(findPost)
    } catch (error) {
        res.status(500).send(error.message)
    }
}