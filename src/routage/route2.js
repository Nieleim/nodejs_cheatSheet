const express = require('express');

const router = express.Router();

/**
 * @typedef R2M1
 * @property {integer} prp1
 * @property {string} prp2
 * @property {bool} prp3
 * @property {Array.<R2M2>} R2M2
 */

/**
 * @typedef R2M2
 * @property {integer} prp1
 * @property {string} prp2
 * @property {boolean} prp3
 * @property {Array.<integer>} integers
 */

/**
 * @route GET /route2/r2get
 * @group Route2 - group for route2
 * @returns {Array.<R2M2>} 200 - An Array of R2M2
 * @returns {Error} 404 - No R2M2 has been found
 * @returns {Error} 500 - Internal Server Error
 */
router.get('/r2get', (req, res) => {
    res.send('this is /route2/');
});

/**
 * @route POST /route2/r2post
 * @group Route2
 * @param {R2M2.model} R2M2.body.required - this parameter is a model defined
 * in swagger - eg: 1
 * @returns {R2M2.model} 201 - R2M2 has been created correctly
 * @returns {Error} 400 - Bad parameters
 * @returns {Error} 500 - Internal server error
 */
router.post('/r2post', (req, res) => {
    res.send('this is /route2/r2post');
});

/**
 * @route PUT /route2/r2put
 * @group Route2
 * @param {integer} id.query.required - this is an id - eg: 1234
 * @param {R2M2.model} R2M2.body.required - this is the new body for the bdd
 * @returns {R2M2.model} 200 - R2M2 has been updated
 * @returns {Error} 400 - Bad parameters
 * @returns {Error} 500 - Internal server error
 */
router.put('/r2put', (req, res) => {
    res.send('this is /route2/r2put');
});

/**
 * @route DELETE /route2/r2delete
 * @group Route2
 * @param {integer} id.query.required - this is an id - eg: 1234
 * @returns 204 - R2M2 has been deleted
 * @returns {Error} 400 - Bad parameters
 * @returns {Error} 500 - Internal server error
 */
router.delete('/r2delete', (req, res) => {
    res.send('this is /route2/r2delete ' + req.query.id);
});

module.exports = router;
