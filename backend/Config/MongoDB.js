const mongoose = require("mongoose")

const MongoConnect = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected MongoDB"))
        .catch((error) => console.log(error))
}


module.exports = MongoConnect