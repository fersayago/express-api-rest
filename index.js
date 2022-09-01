const express = require('express');
const cors = require('cors')
const routerApi = require('./routes/index');

const { boomErrorHandler, logErrors, errorHandler } = require('./middlewares/error.handler')

const app = express();

const port = 3005;

// Middleware
app.use(express.json());

// habilitamos a cualquier dominio de origen en todo el proyecto
//app.use(cors());
const whitelist = ['http://localhost:3000', 'https://fersayago.github.io'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)){ // si el origen esta en la whitelist
      callback(null, true); // no hay error y el acceso esta permitido
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options))


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