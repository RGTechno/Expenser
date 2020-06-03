const { Router } = require("express")
const route = Router()

route.get("/", async (req, res) => {
    if (req.user) {
        res.render("profile", {
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
            username: req.user.username
        })
    }
    else {
        res.redirect("/account/login")
    }
})

module.exports = {
    profileRoute: route
}