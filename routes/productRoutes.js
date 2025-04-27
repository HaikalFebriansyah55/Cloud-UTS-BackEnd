const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to add product
router.post('/products', productController.addProduct);

// Route to list products
router.get('/products', productController.listProducts);

// Route to delete product by ID
router.delete('/products/:id', productController.removeProduct);

module.exports = router;
