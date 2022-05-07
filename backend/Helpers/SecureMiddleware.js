const Jwt = require("jsonwebtoken")
const UserModel = require("../Models/UserModel")

exports.privateAuth = async (req, res, next) => {


    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1]
            const decode = Jwt.verify(token, process.env.JWT_KEY)
            const findUser = await UserModel.findById(decode._id).select('name email password username isAdmin address phone')

            if (findUser) {
                req.user = findUser
                next()
            } else {
                res.status(400).send({ message: "User not found please login" })
            }

        } catch (error) {
            res.status(400).send({ message: "Login expire please login agin" })
        }
    } else {
        res.status(400).send({ message: "Invalid User Login First" })
    }
}


exports.adminAuth = async (req, res, next) => {
    if (req.user.isAdmin) {
        next()
    } else {
        res.status(400).send({ message: "User not allow this route" })
    }
}