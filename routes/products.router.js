const express = require('express');
const ProductsService = require('../services/products.service')

const router = express.Router();
const service = new ProductsService();

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

// hace un update de solamente los campos que se le pasan en el body
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json({
    message: 'partial update',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({
    message: `${id} deleted`
  })
})

module.exports = router;