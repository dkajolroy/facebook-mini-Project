const { userProfile, followAndUnFollow, getAllUser, myFriendsList, getFriendRequest, unFollowUser } = require("../Controller/UserControllers")
const { privateAuth } = require("../Helpers/SecureMiddleware")

const router = require("express").Router()

router.route("/profile").get(privateAuth, userProfile)
router.route("/user")
    .get(privateAuth, getAllUser)

router.put("/follow/:_id", privateAuth, followAndUnFollow)
router.get("/follow-list", privateAuth, myFriendsList)
router.get("/follow-req", privateAuth, getFriendRequest)
router.put("/un_follow/:_id", privateAuth, unFollowUser)





module.exports = router