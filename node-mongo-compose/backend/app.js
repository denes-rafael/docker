const express = require("express")
const restul = require("node-restful")

const server = express()
const mongoose = restul.mongoose

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Teste
server.get('/', (req, res, next) => res.send('Backend'))

// Servidor
server.listen(3000)