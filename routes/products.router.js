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
  const newProduct = service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct
  })
})

// hace un update de solamente los campos que se le pasan en el body
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const product = service.update(id, body);
  res.json({
    message: 'partial update',
    data: product,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const respuesta = service.delete(id)
  res.json({
    data: respuesta,
  })
})

module.exports = router;