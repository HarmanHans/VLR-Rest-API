require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Server started'))

app.use(express.json())

const agentsRouter = require('./routes/agents')

app.use('/agents', agentsRouter)

app.listen(3000, () => console.log('Server running!'))