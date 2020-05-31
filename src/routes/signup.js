const { Router } = require("express")
const { Users } = require("../database/db")

const bcrypt = require('bcrypt');
const saltRounds = 10;

const route = Router()

route.get("/",(req,res)=>{
    res.render("signup")
})

route.post("/", (req, res) => {
    // bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        let user = Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
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