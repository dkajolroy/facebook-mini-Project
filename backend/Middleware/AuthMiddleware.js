const Jwt = require("jsonwebtoken")
const UserModels = require("../Models/UserModels")

exports.PrivateAuth = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1]
            const decode = await Jwt.verify(token, process.env.JWT_KEY)
            const findUser = await UserModels.findById(decode._id)
            if (!findUser) return res.status(401).send({ message: "Invalid user login agin" })
            req.user = findUser,
                req.body = req.body,
                req.params = req.params
            next()
        } catch (error) {
            res.status(400).send({ message: "Login expire please login agin" })
        }
    } else {
        res.status(401).send({ message: "Please login first" })
    }
}