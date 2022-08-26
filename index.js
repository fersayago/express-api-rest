const express = require('express');
const routerApi = require('./routes/index');

const app = express();

const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy un nuevo endpoint');
})

routerApi(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})