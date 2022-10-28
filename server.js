const express = require("express");
const bodyparser = require("body-parser");
const port = process.env.PORT || 5000;
const swaggerUi  = require('swagger-ui-express') ;
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

require("./routes/appointmentRoutes")(app);
require("./routes/physicianRoutes")(app);
require("./routes/patientRoutes")(app);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => console.log(`Server started on ${port}`));