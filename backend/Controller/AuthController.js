const UserModel = require("../Models/UserModels")
const GenerateToken = require("../Helpers/GenerateToken")
const bcrypt = require("bcrypt")


// Register
// Post
// Public
exports.register = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) return res.status(400).send({ message: "Invalid information" })
    try {
        const findUser = await UserModel.findOne({ email: email.toLowerCase() })
        if (findUser) return res.status(400).send({ message: "User already exist! try login" })
        const hashPass = await bcrypt.hash(password.toString(), 10)

        await UserModel.create({
            name, email: email.toLowerCase(), password: hashPass
        })
        res.status(201).send({ message: "Registration Successful" })
    } catch (error) {
        res.status(500).send(error)
    }
}


// Login
// POST
// Public
exports.login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).send({ message: "Invalid information" })
    try {
        const findUser = await UserModel.findOne({ email: email.toLowerCase() })

        if (findUser && await bcrypt.compare(password.toString(), findUser.password)) {
            const { password, isAdmin, address, emailVerify, _id, phone, terms, phoneVerify, addressVerify, ...other } = findUser._doc
            res.status(200).send({
                ...other,
                token: GenerateToken(findUser._id)
            })
        } else {
            res.status(400).send({ message: "Email or Password is invalid" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}






