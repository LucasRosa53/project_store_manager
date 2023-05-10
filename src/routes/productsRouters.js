const express = require('express');

const productsRouters = express.Router();
const productsController = require('../controllers/productsController');
const { validateName } = require('../middlewares/validateName');

productsRouters.get('/', productsController.getAll);
productsRouters.get('/:id', productsController.getProductById);
productsRouters.post('/', validateName, productsController.productRegister);
productsRouters.put('/:id', validateName, productsController.updateProduct);
productsRouters.delete('/:id', productsController.deleteProduct);

module.exports = productsRouters;