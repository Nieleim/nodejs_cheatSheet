// package import
const express = require('express');

// src files import
const router1 = require('./routage/route1.js');
const router2 = require('./routage/route2.js');
const swaggerOptions = require('./utils/swaggerConfig');
const logger = require('./utils/winstonConfig');

// express app creation
const app = express();
const port = process.env.PORT || 3000;

const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(swaggerOptions);

app.listen(port, () => {
    logger.info(`App running on http://localhost:${port}`);
});

// setting up routing
app.use('/route1', router1);
app.use('/route2', router2);

module.exports = app;
