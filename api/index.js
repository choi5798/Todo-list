const express = require('express');
const router = express.Router();

const add = require('./add');
const list = require('./list');

router.post('/add', add);
router.post('/list', list);

module.exports = router;