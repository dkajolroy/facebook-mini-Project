const router = require("express").Router()
const { register, login, updateInfo, updatePhone, updateEmail, updatePassword, emailVerifyLinkSend, emailVerify } = require('../Controller/AuthController')
const { privateAuth, adminAuth } = require("../Helpers/SecureMiddleware")

// How to all space trim on string
router.post("/register", register)
router.post("/login", login)
router.put("/update", privateAuth, updateInfo)
router.put("/update-phone", privateAuth, updatePhone)
router.put("/update-email", privateAuth, updateEmail)
router.put("/update-password", privateAuth, updatePassword)

router.get("/email-verify-link", privateAuth, emailVerifyLinkSend)
router.put("/verify-email/:link", privateAuth, emailVerify)



module.exports = router