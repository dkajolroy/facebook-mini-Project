const { register, login } = require("../Controller/AuthController");
const router = require("express").Router();

// From Login & Register
router.post("/register", register)
router.post("/login", login)


// Social Login or Register


module.exports = router