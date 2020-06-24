const { Users } = require("../database/db")

async function createuser(firstName,lastName,email,username,password){
    let user = await Users.create({
        firstName,
        lastName,
        email,
        username,
        password
    })

    return user;
}

module.exports = {
    createuser
}

