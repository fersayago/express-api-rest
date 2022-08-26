const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

router.get('/', (req, res) => {
  const size = req.query.size;
  const products = [];
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.image(),
    })
  }

  res.json(products);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 1',
    price: 100,
    description: 'Descripcion del producto 1'
  });
})

module.exports = router;