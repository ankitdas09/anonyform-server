const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const bodypareser = require('body-parser')
mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PASS}@anonyform.ogylz.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('DB Connected'))
    .catch(e => console.log(e.message))

const formRoutes = require('./routes/forms/forms.routes')

const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodypareser.json())


app.use('/forms', formRoutes)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))