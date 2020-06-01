const { Router } = require("express")
const { Transactions } = require("../database/db")

const route = Router()

let multitransactions = []

route.get("/", async (req,res)=>{
    if(req.user){
        return res.render("dashboard",{firstName : req.user.firstName, multitransactions})
    }
    else{
        res.redirect("/account/login")
    }
})

route.post("/", async (req,res)=>{

    console.log(req.body)
    const transaction = await Transactions.create({
        price : req.body.inpPrice,
        title : req.body.inpTitle,
        userId : req.user.id
    })
    res.redirect("/dashboard")      
})

module.exports = {
    dashboardRoute : route
}