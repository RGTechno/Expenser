const { Router } = require("express")

const { passport } = require("../passport")

const route = Router()

route.get("/", (req, res) => {
    res.render("login", { title: "Expenser Login" })
})

route.post("/", passport.authenticate("local", {
    failureRedirect: "/account/login",
    successRedirect: "/dashboard"
}))

module.exports = {
    loginRoute: route
}