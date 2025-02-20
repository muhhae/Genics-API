const Product = require('../models/Product');


// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: "Get products success",
      data: products
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Get products failed",
      data: error
    })
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();

    res.status(201).json({
      success: true,
      message: "Save product success",
      data: savedProduct
    })
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: "Save product failed",
    })
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const productID = req.params.id
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productID, req.body, {
      new: true
    });
    res.status(200).json({
      success: true,
      message: "Update product success",
      data: updatedProduct
    })
  }
  catch (e) {
    res.status(500).json({
      success: false,
      message: "Update product failed",
      data: e
    })
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const productID = req.params.id
  try {
    const deletedProduct = await Product.findByIdAndDelete(productID)
    res.status(200).json({
      success: true,
      message: "Delete success",
      data: deletedProduct
    })
  }
  catch (e) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
      data: e
    })
  }
};



module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}