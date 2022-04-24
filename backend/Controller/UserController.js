const UserModels = require("../Models/UserModels")

exports.updateUser = async (req, res) => {
    const { isAdmin, password, addressVerify, phoneVerify, emailVerify, email } = req.body
    if (isAdmin || password || addressVerify || phoneVerify || email || emailVerify)
        return res.status(400).send({ message: "You can't change this information" })
    try {
        const findUser = await UserModels.findByIdAndUpdate(req.user._id, {
            $set: req.body
        }, { new: true }).select("name email -_id phone address ")
        res.status(200).send({ message: "Update successfully", update: findUser })
    } catch (error) {
        res.status(500).send(error)
    }
}