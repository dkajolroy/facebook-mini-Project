const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const MongoConnect = require("./Config/MongoDB")

// Config
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
MongoConnect()

// Import Router
const AuthRoutes = require('./Routes/AuthRoutes')
const UserRoutes = require('./Routes/UserRoutes')
const PostRoute = require('./Routes/PostRoute')

// Config Router
app.use("/", AuthRoutes)
app.use("/", UserRoutes)
app.use("/", PostRoute)

// Listen Server Port
app.listen(process.env.PORT, () => {
    console.log("Start Server Port ==> " + process.env.PORT)
})