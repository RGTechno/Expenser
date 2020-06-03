const { Router } = require("express")
const { Transactions } = require("../database/db")

const route = Router()

route.get("/", (req, res) => {
    if (req.user) {
        return res.render("dashboard", { firstName: req.user.firstName , page : "Dashboard"})
    }
    else {
        res.redirect("/account/login")
    }
})

route.get("/transactions", async (req,res)=>{
    if(req.user){
        let transactions = await Transactions.findAll({where : {userId : req.user.id}})
        return res.send(transactions)
    }
    else {
        res.redirect("/account/login")
    }
})

route.post("/", async (req, res) => {

    console.log(req.body)
    const transaction = await Transactions.create({
        price: req.body.inpPrice,
        title: req.body.inpTitle,
        userId: req.user.id
    })
    res.redirect("/dashboard")
})

module.exports = {
    dashboardRoute: route
}