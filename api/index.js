const express = require('express');
const router = express.Router();

const add = require('./add');
const list = require('./list');
const edit = require('./edit');
const del = require('./delete');

router.post('/add', add);
router.post('/list', list);
router.post('/edit', edit);
router.post('/delete', del);

module.exports = router;