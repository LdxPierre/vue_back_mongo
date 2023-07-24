const express = require('express')
const mongoose = require('mongoose')
const app = express()
const products_routes = require('./routes/products')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI).then((result)=>app.listen(8080, ()=>console.log('server start on port 8080'))).catch((err)=>console.log(err))

app.use(express.json())
app.use('/api/products', products_routes)
