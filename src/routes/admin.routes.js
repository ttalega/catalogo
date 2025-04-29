const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin.controller.js');

router.get('/admin/', adminCtrl.list);
router.get('/admin/create', adminCtrl.showForm);
router.post('/admin/create', adminCtrl.createProduct);
router.post('/admin/update/:id', adminCtrl.updateProduct);
router.post('/admin/delete/:id', adminCtrl.deleteProduct);

module.exports = router;