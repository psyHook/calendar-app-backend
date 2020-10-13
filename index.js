const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// console.log(process.env)

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// Directorio Publico
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas

// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth') );

// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT , () => {
  console.log(`Server on http://localhost:${process.env.PORT}`);
});
