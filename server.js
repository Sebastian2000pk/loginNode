const express = require('express');
const app = express();


app.get('/', (req, res) => {
  // bienvenida 

  // login 
  
})

app.get('/login', (req, res) => {
  // mostrar formulario de login
  res.render('login');
})

app.post('/login', (req, res) => {
  // manejar credenciales
})


app.listen(8000, () => console.log('Server listening on port 8000'))