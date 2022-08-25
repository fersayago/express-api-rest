const express = require('express');

const app = express();

const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy un nuevo endpoint');
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 100,
      description: 'Descripcion del producto 1'
    },
    {
      name: 'Producto 2',
      price: 200,
      description: 'Descripcion del producto 2'
    },
    {
      name: 'Producto 3',
      price: 300,
      description: 'Descripcion del producto 3'
    }
  ]);
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 1',
    price: 100,
    description: 'Descripcion del producto 1'
  });
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Producto 1',
    price: 100,
    description: 'Descripcion del producto 1'
  });
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})