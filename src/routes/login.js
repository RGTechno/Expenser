const { Router } = require("express")
const { Users } = require("../database/db")

const { passport } = require("../passport")

const bcrypt = require('bcrypt');
const saltRounds = 10;

const route = Router()

route.get("/",(req,res)=>{
    res.render("login", {title : "Expenser Login"})
})

route.post("/", passport.authenticate("local",{
    failureRedirect : "/account/login",
    successRedirect : "/dashboard"
}))

module.exports = {
    loginRoute: route
}