const { Router } = require("express")

const route = Router()

route.get("/",(req,res)=>{
    if(req.user){
        return res.render("dashboard",{firstName : req.user.firstName})
    }
    else{
        res.redirect("/account/login")
    }
})

module.exports = {
    dashboardRoute : route
}