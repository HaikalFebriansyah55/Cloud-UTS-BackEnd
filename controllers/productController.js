const productModel = require('../models/productModel');

// ADD product
async function addProduct(req, res, next) {
  try {
    const { name, price, imageUrl } = req.body;

    if (!name || !price || !imageUrl) {
      return res.status(400).json({ message: 'Name, price, and imageUrl are required.' });
    }

    const productId = await productModel.createProduct(name, price, imageUrl);
    res.status(201).json({ id: productId, message: 'Product created successfully.' });
  } catch (error) {
    next(error);
  }
}

// LIST products
async function listProducts(req, res, next) {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

// DELETE product
async function removeProduct(req, res, next) {
  try {
    const { id } = req.params;

    const deleted = await productModel.deleteProduct(id);

    if (deleted) {
      res.json({ message: 'Product deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Product not found.' });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { addProduct, listProducts, removeProduct };
