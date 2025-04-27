const productModel = require('../models/productModel');

async function addProduct(req, res, next) {
  try {
    const { name, price, imageUrl } = req.body;
    const productId = await productModel.createProduct(name, price, imageUrl);
    res.status(201).json({ id: productId, message: 'Product created successfully' });
  } catch (error) {
    next(error);
  }
}

async function listProducts(req, res, next) {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = { addProduct, listProducts };
