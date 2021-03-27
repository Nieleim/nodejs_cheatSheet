/* eslint-disable new-cap */
const express = require('express');

const router = require('./src/routage/route.js');
const router2 = require('./src/routage/route2');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

app.use('/route', router);
app.use('/route2', router2);

module.exports = app;
