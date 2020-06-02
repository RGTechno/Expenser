const { Router } = require("express")
const { createuser } = require("../controllers/signup")

const bcrypt = require('bcrypt');
const saltRounds = 10;

const route = Router()

route.get("/", (req, res) => {
    res.render("signup")
})

route.post("/", async (req, res) => {

    // await bcrypt.hash(req.body.password, saltRounds, function (err, hash) {

        const { firstName, lastName, email, username, password } = req.body
        let user = createuser(firstName, lastName, email, username, password)
        if (user) {
            res.redirect("login")
        }
        else {
            res.send("Unable to create user")
        }

    // });
})

module.exports = {
    signupRoute: route
}