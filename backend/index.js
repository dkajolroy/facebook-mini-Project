const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoConnect = require("./Config/MongoDB.js")

// Configure
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
mongoConnect(process.env.MONGO_URI)

// Import Router
const AuthRoute = require("./Routes/AuthRoute.js")
const UserRoute = require("./Routes/UserRoute.js")

//Config Router
app.use("/", AuthRoute)
app.use("/", UserRoute)

// Listen Server
app.listen(process.env.PORT, () => {
    console.log("Server start port ==> " + process.env.PORT)
})
