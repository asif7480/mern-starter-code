const express = require("express")
const dotenv = require("dotenv").config()

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Server is running at port: ${port}`))