const express = require('express');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUIExpress = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Swagger Configuration
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Exemplo',
    version: '1.0.0',
    description: 'Uma API de exemplo com CRUD',
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./index.js'], // Substitua pelo caminho do seu arquivo de rotas
};

const swaggerSpec = swaggerJSDoc(options);

// Rota Swagger UI
app.use('/api-docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 */

const items = [];
let nextId = 1;

// Rota para criar um novo item
app.post('/v1/api/items', (req, res) => {
  const newItem = {
    id: nextId++,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Rota para recuperar todos os itens
app.get('/v1/api/items', (req, res) => {
  res.json(items);
});

// Outras rotas e comentários Swagger aqui...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
