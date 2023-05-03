const express = require('express');
const listController = require('../controllers/listController');

const app = express();
app.use(express.json());

app.get('/products', listController.getAll);

module.exports = app;