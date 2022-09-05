const { Dinosaur } = require("../models/index")

const checkIfIdExist = async (req, res, next) => {
  try {
    const { id } = req.params
    const dinosaur = await Dinosaur.findOne({
      where: { id },
    })
    if (dinosaur) {
      req.dinosaur = dinosaur
      next()
    } else {
      res.status(404).json("Dinosaur not found")
    }
  } catch (error) {
    console.log(error)
    res.status(500).json("Internal Server Error")
  }
}

const checkIfNameExist = async (req, res, next) => {
  try {
    const nameExist = await Dinosaur.findOne({
      where: {
        name: req.body.name,
      },
    })
    if (nameExist) {
      res.status(409).json("this name already exist")
    } else {
      next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json("Internal Server Error")
  }
}

module.exports = { checkIfIdExist, checkIfNameExist }
