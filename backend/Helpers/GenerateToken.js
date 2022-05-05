const Jwt = require("jsonwebtoken")


exports.generateToken = (_id) => {
    return Jwt.sign({ _id }, process.env.JWT_KEY, {
        expiresIn: "90d"
    })
}

exports.emailVerifyToken = (email) => {
    return Jwt.sign({ email }, process.env.JWT_KEY, {
        expiresIn: "10m"
    })
}