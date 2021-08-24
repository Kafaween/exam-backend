const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT;

const { getdata } = require('./controllers/data.controllers');
const {
  getCrud,
  creatCrud,
  deleteCrud,
  updateCrud,
} = require('./controllers/Crud.controller');

app.get('/', function (req, res) {
  res.send('welcome to server');
});

app.get('/data', getdata);

app.get('/crud', getCrud);
app.post('/crud', creatCrud);
app.delete('/crud/:id', deleteCrud);
app.put('/crud/:id', updateCrud);

app.listen(port || 8001, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
