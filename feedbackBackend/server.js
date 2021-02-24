const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

const url = process.env.DATABASE_ACCESS
const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(url, mongodbOptions,
  () => console.log("Database Connected"))

//body parser
app.use(express.json())
// cors after parser
app.use(cors())
// use routes last
app.use('/app', routesUrls)
var listener = app.listen(4000, () =>
  console.log(`Server is up at ${process.env.HOSTNAME} at ` + listener.address().port))
