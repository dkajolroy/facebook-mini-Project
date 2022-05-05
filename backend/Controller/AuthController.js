const UserModel = require("../Models/UserModel")
const nodemailer = require("nodemailer")
const bcrypt = require("bcrypt")
const Jwt = require("jsonwebtoken")
const { generateToken, emailVerifyToken } = require("../Helpers/GenerateToken")


//Register Controller 
//method Post 
//Access Public
exports.register = async (req, res) => {

    const { username, name, email, password, gender, date } = req.body
    if (!username || !name || !email || !password || !gender || !date) return res.status(400).send({ message: "Invalid information" })
    try {
        const findUser = await UserModel.findOne({ email: email.toLowerCase() })
        if (findUser) return res.status(400).send({ message: "User already exist" })
        const hashPass = await bcrypt.hash(password.toString(), 10)
        await UserModel.create({
            username, name, dateOfBirth: date, gender, password: hashPass, email: email.toLowerCase()
        });
        res.status(201).send({ message: "Registration Successfully" })

    } catch (error) {
        res.status(500).send(error.message)
    }
}


// login Controller 
// method Post 
// Access Public
exports.login = async (req, res) => {

    const { password, emailOrUsername } = req.body
    if (!emailOrUsername || !password) return res.status(400).send({ message: "Invalid information" })

    try {
        const findEmail = await UserModel.findOne({ email: emailOrUsername.toLowerCase() })
        const findName = await UserModel.findOne({ username: emailOrUsername })
        const findUser = findEmail || findName
        if (findUser && await bcrypt.compare(password.toString(), findUser.password)) {
            res.status(200).send({
                username: findUser.username,
                name: findUser.name,
                email: findUser.email,
                avatar: findUser.avatar,
                bio: findUser.bio,
                cover: findUser.cover,
                token: generateToken(findUser._id),
                message: "Login Successfully"
            })
        } else {
            res.status(400).send({ message: "Email or Password is wrong" })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// Update User
// Method Put
// Access Private
exports.updateInfo = async (req, res) => {
    const { isAdmin, emailVerify, addressVerify, phoneVerify, password, email } = req.body
    if (isAdmin || addressVerify || emailVerify || phoneVerify || password || email)
        return res.status(400).send({ message: "Invalid change request" })
    try {
        const updateUser = await UserModel.findByIdAndUpdate(req.user._id, {
            $set: req.body
        }, { new: true }).select('address name username -_id')
        res.status(200).send({ message: "Update Successfully", updateUser })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Update User Phone Number
// Method Put
// Access Private
exports.updatePhone = async (req, res) => {
    if (!req.body.phone) return res.status(400).send({ message: "Invalid information" })
    try {
        const update = await UserModel.findByIdAndUpdate(req.user._id, {
            $set: { phone: req.body.phone, phoneVerify: false }
        }, { new: true }).select('phone -_id')

        res.status(200).send({ message: "Update successfully", update })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// Update User email
// Method Put
// Access Private
exports.updateEmail = async (req, res) => {
    if (!req.body.email) return res.status(400).send({ message: "Invalid information" })
    try {
        const update = await UserModel.findByIdAndUpdate(req.user._id, {
            $set: { email: req.body.email, emailVerify: false }
        }, { new: true }).select('email -_id')
        res.status(200).send({ message: "Update successfully", update })
    } catch (error) {
        res.status(500).send(error.message)
    }
}
// Update User email verify
// Method Put
// Access Private
exports.emailVerifyLinkSend = async (req, res) => {
    const generateLink = emailVerifyToken(req.user.email)

    res.status(200).send({ link: `http://localhost:5000/verify-email/${generateLink}` })
}
// Update User email verify
// Method Put
// Access Private
exports.emailVerify = async (req, res) => {
    const link = req.params.link
    try {
        const decode = Jwt.verify(link, process.env.JWT_KEY)
        await UserModel.findOneAndUpdate({ email: decode.email }, {
            $set: { emailVerify: true }
        })
        res.status(200).send({ message: "Verify Successfully" })
    } catch (error) {
        res.status(500).send({ message: "Expire link send agin to verify" })
    }
}

// Update User Password
// Method Put
// Access Private
exports.updatePassword = async (req, res) => {

    if (!req.body.password || !req.body.oldPassword) return res.status(400).send({ message: "Invalid information" })
    if (await bcrypt.compare(req.body.oldPassword.toString(), req.user.password)) {
        try {
            const hashPass = await bcrypt.hash(req.body.password.toString(), 10)
            const update = await UserModel.findByIdAndUpdate(req.user._id, {
                $set: { password: hashPass }
            }, { new: true }).select('password -_id')
            res.status(200).send({ message: "Update successfully", update })
        } catch (error) {
            res.status(500).send(error.message)
        }
    } else {
        res.status(400).send({ message: "Old password is wrong" })
    }
}

