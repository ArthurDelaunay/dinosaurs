require("dotenv").config()
const user = process.env.USER
const password = process.env.PASSWORD
const host = process.env.HOST
const databaseName = process.env.DATABASE_NAME

const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(databaseName, user, password, {
  host: host,
  dialect: "mysql",
  logging: false,
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connected to database")
  } catch (error) {
    console.log(error)
  }
}

connectDB()

const Dinosaur = require("./Dinosaur")(sequelize)
console.log(Dinosaur, "ok")

sequelize.sync({ alter: true })

const db = {
  sequelize,
  Dinosaur,
}

module.exports = db
