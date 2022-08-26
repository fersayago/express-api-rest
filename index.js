const express = require('express');
const faker = require('faker');

const app = express();

const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy un nuevo endpoint');
})

// ! TODA RUTA ESPECIFICA DEBE IR ANTES QUE LA RUTA DINAMICA
app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
})

app.get('/products', (req, res) => {
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

// ! TOMA FILTER COMO IDENTIFICADOR DE PRODUCTO YA QUE LAS RUTAS CHOCAN
/* // ? SE TIENE QUE DECLARAR ANTES
app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
})
 */

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 1',
    price: 100,
    description: 'Descripcion del producto 1'
  });
})

app.get('/users',(req, res) => {
  const {limit, offset} = req.query;
  // como son opcionales deberia realizar una validacion
  if( limit && offset ){
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }
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