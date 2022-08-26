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
  if (id === "404"){
    res.status(404).json({
      message: "error, no se pudo encontrar el id 404",
      id
    })
  } else {
    res.status(200).json({
      id,
      name: 'Producto 1',
      price: 100,
      description: 'Descripcion del producto 1'
    });
  }
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