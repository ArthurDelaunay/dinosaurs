require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")

const dinosaursRoutes = require("./routes/dinosaurs")
const port = process.env.PORT

require("./models/index")

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

app.use("/dinosaurs", dinosaursRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
