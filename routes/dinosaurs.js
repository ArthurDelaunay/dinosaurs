const express = require("express")
const app = express()

const { Dinosaur } = require("../models/index")
const { checkIfIdExist, checkIfNameExist } = require("../middlewares/dinosaurs")

app.post("/", checkIfNameExist, async (req, res) => {
  const dinosaur = await Dinosaur.create(req.body)
  res.json(dinosaur)
})

app.get("/", async (req, res) => {
  let dinosaurs = []
  if (req.query.ascending === "") {
    //order asc
    dinosaurs = await Dinosaur.findAll({
      order: [["apparitionYear", "ASC"]],
    })
  } else if (req.query.descending === "") {
    // order dsc
    dinosaurs = await Dinosaur.findAll({
      order: [["apparitionYear", "DESC"]],
    })
  } else {
    dinosaurs = await Dinosaur.findAll()
  }
  res.json(dinosaurs)
})

app.get("/:id", checkIfIdExist, async (req, res) => {
  res.json(req.dinosaur)
})

app.put("/:id", checkIfIdExist, checkIfNameExist, async (req, res) => {
  const id = req.id
  await Dinosaur.update(req.body, {
    where: { id },
  })
  const dinosaur = await Dinosaur.findOne({
    where: { id },
  })
  res.json(dinosaur)
})

app.delete("/:id", checkIfIdExist, async (req, res) => {
  const id = req.id
  await Dinosaur.destroy({
    where: { id },
  })
  res.status(204).json("")
})

module.exports = app
