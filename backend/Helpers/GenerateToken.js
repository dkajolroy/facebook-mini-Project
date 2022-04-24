const Jwt = require("jsonwebtoken")

const generateToken = (_id) => {
    return Jwt.sign({ _id }, process.env.JWT_KEY, {
        expiresIn: "90d"
    })
}


module.exports = generateToken