const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product.controller.js');

router.get('/', productCtrl.list);

module.exports = router;
