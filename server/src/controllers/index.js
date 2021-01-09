const express = require('express');
const router = express.Router();

// controller imports
const email = require('./email');

router.use('/email', email);

module.exports = router;
