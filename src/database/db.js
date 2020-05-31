const Sequelize = require("sequelize")

const db = new Sequelize({
    dialect : "mysql",
    database : "expense_manager",
    username : "expense_client",
    password : "clientpass"
})

const Users = db.define("user",{
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },    
    firstName : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
    },
    lastName : {
        type : Sequelize.DataTypes.STRING
    },
    email : {
        type: Sequelize.DataTypes.STRING,
        validate : {
            isEmail : true
        }
    },
    username : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false,
    }
    
})

const Transactions = db.define("transaction",{
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    price : {
        type : Sequelize.DataTypes.FLOAT,
        allowNull : false
    },
    title : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

Users.hasMany(Transactions)
Transactions.belongsTo(Users)

module.exports = {
    db,Users,Transactions
}