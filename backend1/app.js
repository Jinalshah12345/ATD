const request = require('request');
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// //const swaggerDocument = require('./swagger.json');


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Users API',
      description: "Users API information",
     
      //servers: ["http://localhost:3000"]
    }
  },
  apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
console.log(swaggerDocs);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     description: Get all Users
 *     responses:
 *       200:
 *         description: Success
 * 
 */



const cors = require('cors');

const https = require('https');



app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.get('/', (req, res) => {
    request({
      url: 'https://jsonplaceholder.typicode.com/users',
      json: true // this option parses the response's body as JSON
    }, (error, response, body) => {
        res.json(body)
    });
});






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
// app.listen(3000,()=>console.log('server running at port 3000'));
