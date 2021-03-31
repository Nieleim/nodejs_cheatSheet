const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('r1:/');
});

module.exports = router;
