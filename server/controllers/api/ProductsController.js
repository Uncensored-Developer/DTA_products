const express = require('express'),
    multer = require('multer'),
    path = require('path'),
    productService = require('../../services/products');

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage: storage });

let router = express.Router();

router.get('/', productService.fetchProducts);  // Fetch all products route
router.get('/:id', productService.fetchProduct);  // Fetch a product route
router.post('/', upload.single('image'), productService.addProduct);  // Add a product route
router.put('/:id', productService.updateProduct);  // Update a product route
router.delete('/:id', productService.deleteProduct);  // Delete a product route

module.exports = router;