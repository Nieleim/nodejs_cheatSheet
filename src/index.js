// package import
const express = require('express');

// src files import
const router = require('./routage/route.js');
const router2 = require('./routage/route2');
const swaggerOptions = require('./utils/swaggerConfig');

// express app creation
const app = express();
const port = process.env.PORT || 3000;

const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(swaggerOptions);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

// setting up routing
app.use('/route', router);
app.use('/route2', router2);

module.exports = app;
