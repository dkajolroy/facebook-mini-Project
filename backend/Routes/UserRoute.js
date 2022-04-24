const { updateUser } = require("../Controller/UserController");
const { PrivateAuth } = require("../Middleware/AuthMiddleware");
const router = require("express").Router();

router.route("/profile")
    .put(PrivateAuth, updateUser)



module.exports = router