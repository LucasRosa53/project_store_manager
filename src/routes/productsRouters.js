const express = require('express');

const productsRouters = express.Router();
const listController = require('../controllers/listController');

productsRouters.get('/', listController.getAll);
productsRouters.get('/:id', listController.getProductById);

module.exports = productsRouters;