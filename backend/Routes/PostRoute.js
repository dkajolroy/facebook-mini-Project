const { createPost, getMyPost, updatePost, postLike, deletePost, getFriendsMyPost, getAllPost } = require("../Controller/PostController")
const router = require("express").Router()
const { privateAuth } = require("../Helpers/SecureMiddleware")

// Create Post
// method Post
// Access Private
router.route("/post")
    .post(privateAuth, createPost)
    .get(privateAuth, getMyPost)
router.route("/post/:_id")
    .put(privateAuth, updatePost)
    .delete(privateAuth, deletePost)
router.route("/post/like/:_id")
    .put(privateAuth, postLike)
router.get("/our-post", privateAuth, getFriendsMyPost)
router.get("/all-post", getAllPost)


module.exports = router