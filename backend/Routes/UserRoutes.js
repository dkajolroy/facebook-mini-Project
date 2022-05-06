const { userProfile, followAndUnFollow, getAllUser, myFriendsList } = require("../Controller/UserControllers")
const { privateAuth } = require("../Helpers/SecureMiddleware")

const router = require("express").Router()

router.route("/profile").get(privateAuth, userProfile)
router.route("/user")
    .get(privateAuth, getAllUser)
router.route("/follow/:_id")
    .put(privateAuth, followAndUnFollow)
router.get("/follow-list", privateAuth, myFriendsList)





module.exports = router