const express = require('express');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Producto 1',
    price: 100,
    description: 'Descripcion del producto 1'
  });
})

module.exports = router;