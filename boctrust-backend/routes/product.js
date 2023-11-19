const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");
const Product = require('../models/Product'); // import product model

// Set up Multer storage to define where to save the uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename the file with a unique name
  },
});

const upload = multer({
  storage: storage,
});


// get all products endpoint
router.get('/products', async (req, res) => {
    try {
        // get all products
        const products = await Product.find();
        // return success response
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// create new product endpoint
const type = upload.single('productImage');

router.post('/products', type, (req, res) => {
  try {
    // Get post data from request body
    const { productName, category, benefits, features, interestRate, interestType, maxTerm, termPeriod, note } = req.body;

    // Get the image file name from req.file
      const productImage = req.file.filename;
 
    // Validate required fields
    if (!productName || !category || !benefits || !features || !productImage || !interestRate || !interestType || !maxTerm || !termPeriod, !note) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new product
    const product = new Product({ productName, category, benefits, features, productImage, interestRate, interestType, maxTerm, termPeriod, note });

    // Save product
    product.save();

    // Return success response
    return res.status(201).json({ success: 'product created successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// update single product endpoint
router.put('/products/:id', async (req, res) => {
    try {
        // get product id from request params
      const { id } = req.params;

        // get product update data from request body 
        const { productName, category, benefits, features, interestRate, interestType, maxTerm, termPeriod, note } = req.body;

        // validate required fields
        if (!productName || !category || !benefits || !features || !interestRate || !interestType || !maxTerm || !termPeriod || !note ) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // find product by id and update
        const product = await Product.findByIdAndUpdate(id, { productName, category, benefits, features, interestRate, interestType, maxTerm, termPeriod, note });
        
        // save updated product
        product.save();

        // return success response
        return res.status(200).json({ success: 'Product updated successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// delete single product endpoint
router.delete('/products/:id', async (req, res) => {
    try {
        // get product id from request params
        const { id } = req.params;

        // find post by id and delete
        await Product.findByIdAndDelete(id);
        // return success response
        return res.status(200).json({ success: 'Product deleted successfully' });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// export router
module.exports = router;