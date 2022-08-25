const express = require('express');

const app = express();

const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})