const express = require('express');
const productsRouters = require('./routes/productsRouters');
const salesRouters = require('./routes/salesRouters');

const app = express();

app.use(express.json());
app.use('/products', productsRouters);
app.use('/sales', salesRouters);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;