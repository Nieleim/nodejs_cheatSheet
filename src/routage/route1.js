const express = require('express');

const router = express.Router();

/**
 * @typedef R1M1
 * @property {string} prp1
 * @property {boolean} prp2
 */

/**
 * @route GET /route1/r1get
 * @group Route1 - group for route1
 * @param {string} prp1.query.required - A string that identify prp1
 * @returns {R1M1} 200 - A R1M1
 * @returns {Error} 404 - No R1M1 has been found
 * @returns {Error} 500 - Internal Server Error
 */
router.get('/r1get', (req, res) => {
    res.send('route1/r1get');
});

/**
 * @route POST /route1/r1post
 * @group Route1
 * @param {R1M1.model} r1m1.body.required - A R1M1 to insert
 * @returns {R1M1.model} 201 - R1M1 has been created
 * @return {Error} 404 - Bad parameters
 * @returns {Error} 500 - Internal server error
 */
router.post('/r1post', (req, res) => {
    res.send('route1/r1post');
});

/**
 * @route PUT /route1/r1put
 * @group Route1
 * @param {R1M1.model} r1m1.body.required - A R1M1 to modify
 * @returns {R1M1.model} 200 - R1M1 has been modified
 * @return {Error} 404 - Bad parameters
 * @returns {Error} 500 - Internal server error
 */
router.put('/r1put', (req, res) => {
    res.send('route1/r1put');
});

/**
 * @route DELETE /route1/r1delete
 * @group Route1
 * @param {string} prp1.query.required - A string to identify R1M1
 * @returns 200 - R1M1 has been deleted
 * @return {Error} 404 - Bad parameters
 * @returns {Error} 500 - Internal server error
 */
router.delete('/r1delete', (req, res) => {
    res.send('route1/r1delete');
});

module.exports = router;
