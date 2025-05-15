const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/admin.controller.js');

router.get('/', adminCtrl.listAdmin);
router.get('/create', adminCtrl.showForm);
router.post('/create', adminCtrl.createProduct);
router.post('/update/:id', adminCtrl.updateProduct);
router.post('/update', adminCtrl.updateAll);
router.post('/delete/:id', adminCtrl.deleteProduct);

module.exports = router;