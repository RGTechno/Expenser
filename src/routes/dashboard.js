const { Router } = require("express")
const { Transactions } = require("../database/db")

const route = Router()

route.get("/",(req,res)=>{
    if(req.user){
        return res.render("dashboard",{firstName : req.user.firstName})
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
    return res.status(201).send(transaction)  
})

module.exports = {
    dashboardRoute : route
}