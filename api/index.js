const express = require('express');
const router = express.Router();

const add = require('./add');

router.post('/add', add);

module.exports = router;