const express = require('express');

const app = express();

const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy un nuevo endpoint');
})


// lo que mas vamos a devolver son json ya que vamos a hacer una API
app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: '1000',
    description: 'Descripcion del producto 1'
  });
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})