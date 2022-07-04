const express = require('express');
const mongoose = require('mongoose');
const { port, mongoUri } = require('./config')
const cors = require('cors');

const app = express();

const routes = require('./routes')

mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  usenewUrlParser: true
}, async ()=> {
  console.log('Banco de dados mongoDB conectado com sucesso')
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(80, () => {
    console.log('Servidor rodando')
})