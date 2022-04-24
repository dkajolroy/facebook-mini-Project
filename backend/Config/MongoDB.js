const mongoose = require("mongoose")

const mongoConnect = (uri) =>
    mongoose.connect(uri)
        .then(() => console.log("Database Connected"))
        .catch((error) => console.log(error))

module.exports = mongoConnect