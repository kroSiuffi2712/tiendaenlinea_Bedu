const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

// helmet:es una colección de funciones de middleware que tiene encabezados de respuesta http.
app.use(helmet());
//cors:política de seguridad para controlar peticiones http asincronas
app.use(cors()) 

// body-parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));


app.listen(3001, () => {
    console.log(`Express on port 3001`);
  });