require('dotenv').config()
require('./config/database')

const cors = require('cors')
const Router = require('./routes/routes')
const express = require('express')
const port = 4000

const app = express()



app.use(cors())

app.use(express.json())

app.use('/api', Router)


app.listen(port, ()=>console.log('server ready on port' + port))
