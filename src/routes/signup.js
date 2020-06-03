const { Router } = require("express")
const { createuser } = require("../controllers/signup")

const { hashpass } = require("../hashing")

const route = Router()

route.get("/", (req, res) => {
    res.render("signup", { title: "Expenser Signup" })
})

route.post("/", async (req, res) => {

    const pass = await hashpass(req.body.password)

    const { firstName, lastName, email, username} = req.body
    let user = createuser(firstName, lastName, email, username, pass)
    if (user) {
        res.redirect("login")
    }
    else {
        res.send("Unable to create user")
    }
})

module.exports = {
    signupRoute: route
}