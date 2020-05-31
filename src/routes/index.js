const { Router } = require("express")
const { loginRoute } = require("./login")
const { signupRoute } = require("./signup")
const { logoutRoute } = require("./logout")

const route = Router()

route.use("/login", loginRoute)
route.use("/signup", signupRoute)
route.use("/logout",logoutRoute)


module.exports = {
    indexRoute : route
}