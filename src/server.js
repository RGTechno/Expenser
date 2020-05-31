const express = require("express")
const session = require("express-session")
const { passport } = require("./passport")
const { db } = require("./database/db")
const { indexRoute } = require("./routes/index")
const { dashboardRoute } = require("./routes/dashboard")

const app = express()

app.set("view engine", "hbs")

app.use("/",express.static(__dirname + "/public"))

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret : "hfyqrg31784y3rhkh89ui3"
}))
app.use(passport.initialize())
app.use(passport.session())

app.use("/account",indexRoute)
app.use("/dashboard",dashboardRoute)

db.sync()
    .then(() => {
        app.listen(3333, () => {
            console.log("Server Started on http://localhost:3333")
        })
    })
    .catch(() => {
        console.log("Unable to setup Database")
    })

