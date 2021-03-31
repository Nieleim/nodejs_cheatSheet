const express = require('express');

const router = express.Router();

/**
 * @typedef R2M1
 * @property {integer} prp1
 * @property {string} prp2
 * @property {bool} prp3
 */

/**
 * @typedef R2M2
 * @property {integer} prp1
 * @property {string} prp2
 * @property {bool} prp3
 */

/**
 * @route GET /route2/
 * @group Route2 - group for route2
 * @param {int} p1.params.required - this is p1 - eg: 1
 */
router.get('/', (req, res) => {
    res.send('this is /route2/');
});

/**
 * @route POST /route2/r2post/
 * @group Route2
 * @param {string} p1.body.required - this is p1 - eg: 1
 */
router.get('/r2post', (req, res) => {
    res.send('this is /route2/r2post');
});

module.exports = router;
