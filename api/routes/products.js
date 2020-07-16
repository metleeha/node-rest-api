const express = require('express');
const router = express.Router();

const Product = require('../models/products');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    product.find()
      .exec()
      .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
      });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling Post request to /products",
            createdPruduct: result
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        });
    });
});

router.get('/:productId', (req, request, next) => {
    const id = req.params.productId;
    Product.findById(id)
      .exec()
      .then(doc => {
          console.log("Fron Database", doc);
          if (doc) {
            res.status(200).json(doc);
          } else {
              res.status(400).json({ message: "No valid entry found for provided ID"});
          }
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({error: err});
        });
});

router.patch('/:productId', (res, req, next) => {
    res.status(200).json({
        message: "Update product by Id"
    });
});

router.delete('/:productId', (res, req, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});

module.exports = router;