const { Router } = require("express")
const { loginRoute } = require("./login")
const { signupRoute } = require("./signup")

const route = Router()

route.use("/login", loginRoute)
route.use("/signup", signupRoute)


module.exports = {
    indexRoute : route
}