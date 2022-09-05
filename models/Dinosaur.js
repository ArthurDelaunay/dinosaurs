const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Dinosaur = sequelize.define("Dinosaur", {
    name: {
      type: DataTypes.STRING,
    },
    scientificName: {
      type: DataTypes.STRING,
    },
    apparitionYear: {
      type: DataTypes.INTEGER,
    },
    disparitionYear: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    color: {
      type: DataTypes.STRING,
    },
  })
  return Dinosaur
}
