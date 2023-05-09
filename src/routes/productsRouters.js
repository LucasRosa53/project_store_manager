const express = require('express');

const productsRouters = express.Router();
const productsController = require('../controllers/productsController');

productsRouters.get('/', productsController.getAll);
productsRouters.get('/:id', productsController.getProductById);
productsRouters.post('/', productsController.productRegister);

module.exports = productsRouters;