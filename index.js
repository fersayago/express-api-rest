const express = require('express');
const routerApi = require('./routes/index');

const { boomErrorHandler, logErrors, errorHandler } = require('./middlewares/error.handler')

const app = express();

const port = 3005;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy un nuevo endpoint');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})