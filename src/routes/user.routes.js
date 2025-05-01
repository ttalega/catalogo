const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller.js');

router.post('/', userCtrl.updateUser);


module.exports = router;