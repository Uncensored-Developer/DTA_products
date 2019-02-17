const express = require('express'),
    productsController = require('../../../controllers/api/ProductsController');

let router = express.Router();

// Setup controller for products
router.use('/products', productsController);

module.exports = router;