const { Router } = require("express")
const { passport } = require("../passport")

const route = Router()

route.get("/",(req,res)=>{
    req.logOut()
    res.redirect("/account/login")
})

module.exports = {
    logoutRoute: route
}