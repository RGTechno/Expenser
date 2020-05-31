const passport = require("passport")
const localStrategy = require("passport-local")
const { Users } = require("./database/db")

passport.serializeUser(function (user, done) {
    done(null, user.username)
})

passport.deserializeUser(function (username, done) {
    Users.findOne({
        where: { username: username },
    }).then((user) => {
        if (!user) {
            return done(new Error("No Such User"))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })

})

passport.use(new localStrategy(function (username, password, done) {
    Users.findOne({
        where: { username: username },
    }).then((user) => {
        if (!user) {
            return done(null, false, { message: "NO such User" })
        }
        if (user.password !== password) {
            return done(null, false, { message: "Incorrect Password" })
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })

}))

module.exports = {
    passport
}
