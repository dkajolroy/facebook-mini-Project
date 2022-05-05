const { userProfile, followAndUnFollow } = require("../Controller/UserControllers")
const { privateAuth } = require("../Helpers/SecureMiddleware")

const router = require("express").Router()

router.route("/profile").get(privateAuth, userProfile)
router.route("/follow/:_id")
    .put(privateAuth, followAndUnFollow)






module.exports = router