const Product = require('../../models/Product');


// Fetch all products service
fetchProducts = (req, res) => {
    Product.find({}, 'name price').sort({ _id: -1 })
        .then(products => res.status(200).send({
            status: 'success',
            products: products
        }))
        .catch(err => res.status(500).send({
            status: 'Error',
            message: err
        }));
};

// Fetch a single product by ID service
fetchProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            res.status(200).send({
                status: 'success',
                product: product
            });
        })
        .catch(err => {
            res.status(404).send({
                status: "error",
                message: err
            });
        });
};

// Add a product service
addProduct = (req, res, next) => {
    let name = req.body.name;
    let description = req.body.description;
    let price = req.body.price;
    let color = req.body.color;
    let category = req.body.category;
    let image = req.file.path;
    let new_product = Product({
        name: name,
        description: description,
        price: price,
        color: color,
        category: category,
        image: image
    })

    new_product.save()
        .then(product => {
            res.status(200).send({
                status: 'success',
                message: 'Product posted successfully',
                product: product
            });
        })
        .catch(err => {
            res.status(500).send({
                status: "error",
                message: err
            });
        });
}

// Update a product service
updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(product => {
            res.status(200).send({
                status: 'success',
                message: 'Product updated successfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                status: "error",
                message: err
            });
        });
};

// Delete a product service
deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(product => {
            res.status(200).send({
                status: 'success',
                message: 'Product deleted successfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                status: "error",
                message: err
            });
        });
};

module.exports = {
    fetchProduct: fetchProduct,
    fetchProducts: fetchProducts,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
};