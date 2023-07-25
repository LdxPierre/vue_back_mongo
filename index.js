const express = require('express')
const mongoose = require('mongoose')
const app = express()
const products_routes = require('./routes/products')
const bodyParser = require('body-parser')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI).then((result)=>app.listen(8080, ()=>console.log('server start on port 8080'))).catch((err)=>console.log(err))

app.use(bodyParser.json())
app.use((req,res,next)=>{res.header('Access-Control-Allow-Origin', 'http://localhost:5173');next()})
app.use((req,res,next)=>{res.header('Access-Control-Allow-Headers', 'Content-Type');next()})
app.use('/api/products', products_routes)
