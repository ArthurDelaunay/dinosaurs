const { Dinosaur } = require("../models/index")

const checkIfIdExist = async (req, res, next) => {
  const { id } = req.params
  const dinosaur = await Dinosaur.findOne({
    where: { id },
  })
  if (dinosaur) {
    req.dinosaur = dinosaur
    req.id = id
    next()
  } else {
    res.status(404).json("dinosaur not found")
  }
}

const checkIfNameExist = async (req, res, next) => {
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
}

module.exports = { checkIfIdExist, checkIfNameExist }
