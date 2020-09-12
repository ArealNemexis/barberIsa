const express = require('express')
const app = express()
const port = 1264
const router = require('./routes')//chama
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use(router) //referencia rotas
app.listen(port) //ouvir a porta


