// main starting point
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./router.js')
const app = express()

//db setup
mongoose.connect("mongodb://127.0.0.1:27017/auth")
// app setup
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({type:'*/*'}))
router(app)

// server setup
const port = process.env.PORT || 3090
const server = http.createServer(app)

server.listen(port,()=>{
    console.log("Server is listening on port: ",port)
})