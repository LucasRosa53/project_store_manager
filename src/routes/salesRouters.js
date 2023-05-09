const express = require('express');

const salesRouters = express.Router();
const salesController = require('../controllers/salesController');

salesRouters.get('/', salesController.getAllSales);
salesRouters.get('/:id', salesController.getSalesById);

module.exports = salesRouters;
